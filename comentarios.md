# Análisis del proyecto SIAAPI

> Fecha del análisis: 2026-09-25. Solo es un análisis: no se modificó ningún archivo del proyecto salvo este.

---

## 1. ¿Qué es?

**SIAAPI** (*Sistema de Información de Áreas Académicas y Proyectos de Investigación CBI*) es un portal web institucional de **consulta pública** de la División de Ciencias Básicas e Ingeniería (CBI) de la **UAM Azcapotzalco**.

## 2. ¿Qué hace?

Presenta la estructura académica de la división en cuatro niveles:

```
Departamento (5) → Área académica → PIA (Programa de Investigación del Área) → Proyecto de investigación
```

Pantallas actuales:

| Ruta | Pantalla | Qué muestra |
|---|---|---|
| `/` | Inicio | Hero con imagen y texto de presentación del sistema |
| `/departamentos/[id_departamento]/[id_area]` | Área académica | Responsable, objeto, objetivos, profesores miembros y los proyectos agrupados por PIA (tarjetas) |
| `/departamentos/.../[id_pia]/[id_proyecto]` | Proyecto | Clave, PIA/área/departamento, fechas (inicio, término, prórroga), acuerdo de consejo, objetivos, responsable y participantes |
| `/buscar?q=` | Búsqueda | Tablas de resultados de áreas, PIAs y proyectos |

Elementos comunes: encabezado institucional, barra lateral con buscador y acordeones de departamentos/áreas (cargados de la BD), y un pie de página con contacto y enlaces.

## 3. Tecnologías

| Capa | Tecnología |
|---|---|
| Framework | **SvelteKit 2** + **Svelte 5** (modo *runes* forzado: `$state`, `$props`, `$effect`, `$bindable`, *snippets*) |
| Lenguaje | **TypeScript** 6 |
| Build / dev server | **Vite** 8 |
| Despliegue | `@sveltejs/adapter-node` (servidor Node), con `base: '/test-siaapi'` |
| Base de datos | **MySQL/MariaDB** vía `mysql2/promise` (pool de conexiones) |
| Acceso a datos | Patrón **DAO** sobre **vistas SQL** (`siaapi_navegacion`, `siaapi_pagina_areas`, `siaap_pagina_proyecto`, `siaapi_busqueda_*`) que devuelven JSON anidado |
| Estilos | CSS puro con *scoped styles* de Svelte + **Design Tokens** en variables CSS (`src/lib/styles/tokens.css`) |
| Gestor de paquetes | pnpm |
| Documentación | `docs/design.md`, `docs/design-tokens.md` + capturas de referencia en `static/referencia/` |

No hay librerías de UI, ni de iconos (SVG en línea, estilo Material Symbols), ni framework CSS.

---

## 4. Puntos fuertes

1. **Sistema de diseño documentado y con tokens.** Colores, tipografía, espaciado, radios y sombras están centralizados en `tokens.css` y documentados con estado (`CONFIRMED` / `PROVISIONAL`). Esto es poco común en proyectos de este tamaño y facilita mucho mantener la consistencia.
2. **Identidad institucional clara y sobria.** El rojo UAM (`#B21E27`) se usa con moderación como acento (borde izquierdo, acrónimo, botones, ítem activo) sobre una base neutra gris/blanca. El resultado se ve serio, limpio y "oficial".
3. **Biblioteca de componentes reutilizables** (`Card`, `NavGroup`, `NavItem`, `SearchInput`, `ProjectCard`, `StatusBadge`, `AppShell`…) con props tipadas y uso correcto de *snippets* de Svelte 5.
4. **Buena fidelidad a las referencias** (`static/referencia/*`): el layout de sidebar + contenido, las tarjetas de proyectos por PIA y la ficha del proyecto se parecen mucho a los diseños objetivo.
5. **Arquitectura de datos simple.** La lógica de agregación vive en vistas SQL y los DAO son finos; todo se carga en el servidor (`+page.server.ts`), así que las páginas llegan renderizadas (SSR), lo cual es bueno para SEO y velocidad.
6. **Consultas parametrizadas** (`?`) en todos los DAO: no hay riesgo de inyección SQL. El `.env` está en `.gitignore`.
7. **Detalles de UX bien resueltos:** acordeón del departamento activo que se abre solo, "Ver más (N restantes)", contador de resultados, enlace "Volver al área", estados Activo/Inactivo con color, tarjetas con *hover* elevado.
8. **Responsivo básico:** las grillas pasan de 3 → 2 → 1 columna y el layout se apila en pantallas menores a 768 px.
9. **HTML semántico en varias partes:** `<aside>`, `<nav>`, `<header>`, `<footer>`, `role="search"`, `aria-expanded` en los acordeones, `aria-hidden` en iconos decorativos.

---

## 5. Puntos débiles

### 5.1 Errores funcionales (bugs) encontrados

| # | Dónde | Problema |
|---|---|---|
| 1 | `departamentos/[id_departamento]/[id_area]/+page.svelte` | `expandedPias` es un `Set` dentro de `$state(new Set())`. En Svelte 5 `$state` **no** vuelve reactivo a un `Set` (solo a objetos y arrays planos), así que `.add()`/`.delete()` no disparan actualización: el botón **"Ver más" de cada PIA probablemente no hace nada**. Debería usarse `SvelteSet` de `svelte/reactivity` o reasignar un nuevo `Set`. |
| 2 | Misma página | El panel **"Objetivos Específicos"** valida `data.area.objetivo_general.length` en lugar de `objetivos_especificos`. |
| 3 | Misma página | `data.area.objeto.length` / `objetivo_general.length` fallan (error en tiempo de ejecución) si el campo viene `null` de la BD. |
| 4 | Misma página | Quedó un `console.log(expandedPias)`. |
| 5 | `[id_proyecto]/+page.server.ts` | Si no existe el proyecto redirige a `'/departamentos'`, **ruta que no existe** y además sin el `base` (`/test-siaapi`). Termina en 404. |
| 6 | `[id_proyecto]/+page.svelte` | `const project = data.proyecto;` no es reactivo: si se navega de un proyecto a otro sin recargar, la página puede quedarse mostrando el anterior. Usar `$derived(data.proyecto)`. |
| 7 | `+layout.svelte` | `asset(page.url.pathname) === asset(area.href)` aplica el prefijo `base` dos veces al `pathname` (que ya lo trae); esa comparación nunca es verdadera. Funciona de rebote gracias al `$effect`. |
| 8 | `+layout.svelte` | Los IDs de departamento (`"19"`…`"15"`) están *hardcodeados* en `openDeptos`; si cambian en la BD se rompe. |
| 9 | `ProjectCard.svelte` | Usa `on:click` (sintaxis de Svelte 4) en un proyecto en modo *runes*, navega con `window.location.href` (recarga completa, pierde el SPA) y tiene un `<a>` dentro de un `<div>` clicable. |
| 10 | `buscar/+page.server.ts` | Con `q` vacío (`/buscar`) el `LIKE '%%'` devuelve **toda** la BD. Las tres consultas se ejecutan en serie; podrían ir en `Promise.all`. `getAreas` pasa 2 parámetros para 1 placeholder. |
| 11 | Loaders en general | Cualquier error (incluida una caída de la BD) se traduce en redirección silenciosa al inicio. Sería más correcto `error(404)` para "no encontrado" y dejar que los errores reales lleguen a un `+error.svelte`. |

### 5.2 Diseño visual y UX

1. **La página de inicio es muy pobre en contenido.** Solo tiene un hero (con `subtitle=""`) y dos párrafos. El *callout* "Consulta el catálogo académico" de la referencia está comentado. No hay ningún punto de entrada visual a los departamentos.
2. **Título duplicado/inconsistente.** El header dice *"Sistema de Información de Áreas Académicas y Proyectos de Investigación CBI (SIAAPI)"* y el hero dice *"Sistema de Información para la Administración de Proyectos de Investigación"*. Son dos nombres distintos del mismo sistema, uno debajo del otro.
3. **Tipografía no cargada.** Los tokens declaran `"Inter"`, pero no se importa en ningún lado (`app.html` no tiene `<link>` ni `@font-face`). En la mayoría de equipos se verá la sans-serif del sistema (Arial/Segoe), distinto a la referencia.
4. **`capitalizarPrimerLetra` destruye mayúsculas legítimas.** Pasa todo a minúsculas y solo levanta la primera letra: siglas y nombres propios quedan mal ("Uam", "cbi", "méxico", "Física de materiales para Ibm"…). Lo ideal es corregir los datos en origen o usar una lista de excepciones.
5. **Nombres de áreas truncados en la barra lateral.** `NavItem` usa `white-space: nowrap` + elipsis; los nombres de área son largos ("Área académica de álgebra, geometría y computación") y se cortan sin tooltip. La referencia los muestra en varias líneas.
6. **Jerarquía de encabezados rota.** Hay varios `<h1>` por página (header + hero en Inicio; header + "Proyectos de Investigación" en Área). En la página de Área el título del área es `h2` y "Proyectos de Investigación" es `h1`: la jerarquía está invertida. En Proyecto el título principal es `h2`.
7. **Búsqueda mejorable:**
   - No muestra el término buscado ("15 resultados para *'redes'*").
   - Si una sección tiene 0 resultados se ve una tabla vacía con solo encabezados, sin mensaje de "Sin resultados".
   - **Las filas no son enlaces**: no se puede ir del resultado al área o proyecto, que es la acción principal esperada.
   - El buscador lateral no se precarga con el `q` actual al llegar a `/buscar`.
8. **Página de Área:**
   - Los cuatro botones (Objeto, Objetivo general, Objetivos específicos, Profesores) pueden abrirse todos a la vez y apilan paneles; se comportan mejor como **pestañas** o acordeón exclusivo. Además no tienen `aria-expanded`.
   - Si un área no tiene PIAs o proyectos no hay estado vacío.
9. **Página de Proyecto:**
   - Falta el **badge de estado** (Activo/Inactivo) que sí aparece en la referencia.
   - La fecha de prórroga siempre se resalta en rojo aunque diga "Sin registro".
   - Los iconos usan `fill="#B21E27"` directo en lugar del token `--color-primary`.
   - Las fechas se muestran como `15-01-2024`; la referencia usa `15 ene 2024`, más legible (`toLocaleDateString('es-MX', …)`).
10. **Móvil:** bajo 768 px la barra lateral completa (buscador + 5 acordeones) se apila **encima** del contenido, obligando a hacer scroll para ver la página. Falta un menú colapsable (botón hamburguesa/drawer). Además `SidebarNav` tiene `min-width: 280px`, que puede desbordar en pantallas de 320 px.
11. **Texto justificado** (`text-align: justify`) en párrafos de inicio y paneles: en español y en columnas angostas genera "ríos" de espacios; se lee mejor alineado a la izquierda.
12. **Footer:**
    - Colores escritos a mano (`#1e293b`, `#cbd5e1`, `#60a5fa`…) fuera del sistema de tokens; el azul de los correos no pertenece a la paleta institucional.
    - Incluye un `<p>` vacío y no incluye las ligas de `static/referencia/footer/información.txt` (Transparencia, Servicio Social, Ligas para externos…).
    - Dirección desactualizada: "México, D.F." → "Ciudad de México"; "01 (55)" ya no se marca.
13. **Enlace "Consejo Divisional CBI"** en la barra lateral: es externo pero se abre en la misma pestaña, sin indicarlo, y su condición `active` apunta a una ruta inexistente (`/consulta-institucional`).

### 5.3 Accesibilidad

- `<html lang="en">` debería ser `lang="es"` (afecta lectores de pantalla y traducción automática).
- **Contraste insuficiente:** `--color-text-muted` (`#9CA3AF`) sobre blanco da ≈ 2.5:1 (WCAG pide 4.5:1) y se usa en etiquetas de fechas, "Responsable:", *eyebrow*, etc. El título rojo del footer sobre `#1e293b` también queda bajo (≈ 2.6:1).
- El input de búsqueda tiene `outline: none`; ni botones ni enlaces tienen estilos `:focus-visible`: la navegación con teclado es casi invisible. El input tampoco tiene `<label>` ni `aria-label`.
- `ProjectCard` es un `<div>` clicable sin rol ni soporte de teclado.
- No hay enlace "Saltar al contenido".

### 5.4 Calidad de código y mantenimiento

- **Código muerto:** `src/lib/data/navigation.ts` (datos de prueba), `src/lib/data/projects.ts` (vacío), `AreaDAO`, `PIADAO`, `ProyectoDAO`, `DepartamentoDAO` y `types/db.ts` no se usan (y `db.ts` tiene el typo `eatado`). Hay CSS sin uso (`.highlight-red`, `.callout-*`, `.avatar`, `.section-icon`).
- **Duplicación:** `SectionSubTitle` es copia casi exacta de `SectionTitle` (y su opción `as="h3"` renderiza un `h2`). Los SVG de iconos se repiten en línea en varias páginas; un componente `<Icon name="…">` reduciría mucho el ruido. Estilos de tablas y botones "Ver más" están duplicados entre páginas.
- **Mezcla de convenciones:** vistas `siaapi_*` y `siaap_*`; dos DAO llamados `ProyectoDAO` en archivos distintos; `ProyectoDAO.getAreasConPIAsConProyectos` en realidad devuelve un proyecto. Indentación mezclada (tabs y 4 espacios).
- `asset()` se usa para rutas de páginas; para eso SvelteKit ofrece `resolve()` / `base` de `$app/paths` (`asset()` es para archivos estáticos).
- Nombres de tokens confusos: `--radius-xl` (4px) es **menor** que `--radius-lg` (12px). `--accent-border-width` y `--border-width-accent` son el mismo valor duplicado. `tokens.css` promete un `global.css` que no existe (el reset global vive dentro de `AppShell.svelte`).
- Sin `+error.svelte`, sin página 404 propia, sin `<meta name="description">`.
- Sin pruebas, sin ESLint/Prettier, `README.md` es la plantilla por defecto y `docs/architecture.md`, `components.md` y `screens.md` están vacíos.

---

## 6. Recomendaciones priorizadas

**Alta (corregir primero)**
1. Arreglar el "Ver más" de PIAs (`SvelteSet`), la validación de *Objetivos Específicos* y los accesos a `.length` sobre posibles `null`.
2. Corregir la redirección de proyecto no encontrado y usar `error(404)` + un `+error.svelte` con el diseño del sitio.
3. `lang="es"`, cargar realmente la fuente Inter, estilos `:focus-visible` y subir el contraste de `--color-text-muted` (p. ej. `#6B7280`).
4. Hacer que las filas de resultados de búsqueda enlacen a su área/proyecto y mostrar estados vacíos.

**Media (mejoras de diseño/UX)**
5. Enriquecer el Inicio: 5 tarjetas de departamento (con número de áreas/proyectos) como accesos directos, rehabilitar el *callout* y unificar el nombre del sistema entre header y hero.
6. Menú lateral colapsable en móvil; permitir que los nombres de área se muestren en varias líneas.
7. Convertir los botones de la ficha de Área en pestañas; añadir el badge de estado y fechas legibles en Proyecto.
8. Pasar los colores del footer a tokens y completar sus ligas con `información.txt`.
9. Corregir la jerarquía de encabezados (un solo `h1` por página, el título del contenido).

**Baja (mantenimiento)**
10. Eliminar código muerto, fusionar `SectionTitle`/`SectionSubTitle`, crear un componente `Icon`.
11. Unificar nombres de vistas/DAO, añadir Prettier + ESLint y usar `resolve()` para rutas.
12. Completar `README.md` y los documentos vacíos de `docs/`.

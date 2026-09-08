# design-tokens.md — Design Tokens del Sistema SIAAPI

Este documento define los **Design Tokens** oficiales del Sistema de Información para la Administración de Proyectos de Investigación (SIAAPI).

Los Design Tokens representan los valores visuales reutilizables del sistema de diseño: colores, tipografía, espaciado, bordes, radios, sombras, dimensiones, layout y estados de interacción.

Este documento complementa `docs/design.md`.

---

# 1. Propósito

Los componentes y páginas de SIAAPI deben utilizar estos tokens en lugar de definir valores visuales arbitrarios.

Por ejemplo, se debe utilizar:

```css
color: var(--color-text);
```

en lugar de:

```css
color: #1F2937;
```

De igual manera:

```css
padding: var(--space-6);
```

en lugar de:

```css
padding: 24px;
```

Los tokens deberán implementarse como **CSS Custom Properties** y estar disponibles globalmente desde `:root`.

Las CSS Custom Properties permiten definir valores reutilizables y referenciarlos mediante `var()`, facilitando la consistencia y el mantenimiento del sistema visual.

---

# 2. Estados de los Tokens

Cada token puede encontrarse en uno de los siguientes estados:

| Estado        | Significado                                                                              |
| ------------- | ---------------------------------------------------------------------------------------- |
| `CONFIRMED`   | Valor confirmado a partir de la referencia visual o de una decisión explícita de diseño. |
| `PROVISIONAL` | Valor estimado que puede modificarse cuando se obtenga información visual más precisa.   |
| `TODO`        | Token identificado pero cuyo valor todavía no ha sido determinado.                       |

### Regla

Los valores `PROVISIONAL` deben utilizarse de manera consistente hasta que sean reemplazados por un valor definitivo.

Los valores `TODO` no deben ser inventados por el agente. Si son necesarios para implementar una funcionalidad, debe utilizarse el valor provisional más cercano disponible o solicitarse una decisión de diseño.

---

# 3. Convención de nombres

Los tokens utilizan nombres semánticos.

Formato general:

```text
--categoria-propiedad
```

Ejemplos:

```text
--color-primary
--color-text
--font-size-md
--space-4
--radius-md
--shadow-sm
```

No deben utilizarse nombres basados exclusivamente en el aspecto físico del valor.

Evitar:

```text
--red
--gray
--big-text
--twenty-four-px
```

Preferir:

```text
--color-primary
--color-text-secondary
--font-size-xl
--space-6
```

La intención es que el nombre describa **la función del valor dentro del sistema de diseño**, no solamente su apariencia.

---

# 4. Colores

## 4.1 Colores de marca

### Primary

| Token                    | Valor     | Estado        | Uso                                  |
| ------------------------ | --------- | ------------- | ------------------------------------ |
| `--color-primary`        | `#B21E27` | `PROVISIONAL` | Color institucional principal.       |
| `--color-primary-hover`  | `#951A22` | `PROVISIONAL` | Estado hover de elementos primarios. |
| `--color-primary-active` | `#82171E` | `PROVISIONAL` | Estado activo/pressed.               |

El color primario se utiliza principalmente en:

* Acrónimo `SIAAPI`.
* Línea decorativa.
* Bordes laterales de acento.
* Botones principales.
* Texto destacado.
* Indicadores.
* Elementos activos de navegación.

---

## 4.2 Fondos

| Token                          | Valor     | Estado        | Uso                                    |
| ------------------------------ | --------- | ------------- | -------------------------------------- |
| `--color-background`           | `#F8FAFC` | `PROVISIONAL` | Fondo general de la aplicación.        |
| `--color-surface`              | `#FFFFFF` | `CONFIRMED`   | Fondo de tarjetas y paneles.           |
| `--color-surface-secondary`    | `#F3F4F6` | `PROVISIONAL` | Fondo secundario cuando sea necesario. |
| `--color-selection-background` | `#FDF0F0` | `PROVISIONAL` | Fondo del elemento activo y callouts.  |

---

## 4.2.1 Estados (Badges)

| Token                        | Valor     | Estado        | Uso                                       |
| ---------------------------- | --------- | ------------- | ----------------------------------------- |
| `--color-status-active-bg`   | `#E6F4EA` | `PROVISIONAL` | Fondo de insignia para proyectos activos. |
| `--color-status-active-text` | `#137333` | `PROVISIONAL` | Texto de insignia para proyectos activos. |
| `--color-status-inactive-bg` | `#F3F4F6` | `PROVISIONAL` | Fondo de insignia para proyectos inactivos.|
| `--color-status-inactive-text`| `#6B7280`| `PROVISIONAL` | Texto de insignia para proyectos inactivos.|

---

## 4.3 Texto

| Token                     | Valor     | Estado        | Uso                                      |
| ------------------------- | --------- | ------------- | ---------------------------------------- |
| `--color-text`            | `#1F2937` | `PROVISIONAL` | Texto principal.                         |
| `--color-text-secondary`  | `#6B7280` | `PROVISIONAL` | Texto secundario, labels y placeholders. |
| `--color-text-muted`      | `#9CA3AF` | `PROVISIONAL` | Texto de menor importancia visual.       |
| `--color-text-on-primary` | `#FFFFFF` | `CONFIRMED`   | Texto sobre fondos primarios.            |

---

## 4.4 Bordes

| Token                    | Valor     | Estado        | Uso                              |
| ------------------------ | --------- | ------------- | -------------------------------- |
| `--color-border`         | `#E5E7EB` | `PROVISIONAL` | Bordes generales.                |
| `--color-border-subtle`  | `#EAECF0` | `PROVISIONAL` | Separadores y bordes muy tenues. |
| `--color-border-primary` | `#B21E27` | `PROVISIONAL` | Bordes de acento institucional.  |

---

# 5. Tipografía

## 5.1 Familia tipográfica

| Token                | Valor                 | Estado        |
| -------------------- | --------------------- | ------------- |
| `--font-family-base` | `"Inter", sans-serif` | `PROVISIONAL` |

La familia tipográfica exacta todavía debe confirmarse.

Mientras no exista una decisión definitiva, se utilizará `Inter`.

No se debe cambiar arbitrariamente entre:

* Inter
* Roboto
* Open Sans
* Plus Jakarta Sans

en diferentes páginas.

Toda la aplicación debe utilizar el mismo token:

```css
font-family: var(--font-family-base);
```

---

# 6. Tamaños tipográficos

La escala tipográfica inicial es:

| Token             |             Valor | Estado        | Uso                             |
| ----------------- | ----------------: | ------------- | ------------------------------- |
| `--font-size-xs`  |  `0.75rem` / 12px | `PROVISIONAL` | Labels pequeños.                |
| `--font-size-sm`  | `0.875rem` / 14px | `PROVISIONAL` | Navegación y texto secundario.  |
| `--font-size-md`  |     `1rem` / 16px | `CONFIRMED`   | Texto base.                     |
| `--font-size-lg`  | `1.125rem` / 18px | `PROVISIONAL` | Subtítulos.                     |
| `--font-size-xl`  |  `1.25rem` / 20px | `PROVISIONAL` | Títulos de sección pequeños.    |
| `--font-size-2xl` |   `1.5rem` / 24px | `PROVISIONAL` | Títulos principales.            |
| `--font-size-3xl` |  `1.75rem` / 28px | `PROVISIONAL` | Título principal de aplicación. |

---

# 7. Pesos tipográficos

| Token                    | Valor | Uso                             |
| ------------------------ | ----: | ------------------------------- |
| `--font-weight-regular`  | `400` | Texto normal.                   |
| `--font-weight-medium`   | `500` | Énfasis ligero.                 |
| `--font-weight-semibold` | `600` | Labels y navegación.            |
| `--font-weight-bold`     | `700` | Títulos y elementos destacados. |

---

# 8. Line Height

| Token                   |  Valor | Uso                              |
| ----------------------- | -----: | -------------------------------- |
| `--line-height-tight`   | `1.25` | Títulos.                         |
| `--line-height-normal`  |  `1.5` | Texto general.                   |
| `--line-height-relaxed` |  `1.6` | Párrafos y contenido de lectura. |

El cuerpo de texto debe utilizar preferentemente:

```css
line-height: var(--line-height-relaxed);
```

---

# 9. Espaciado

El sistema utiliza una escala basada principalmente en múltiplos de 4px.

| Token        |  Valor | Uso                       |
| ------------ | -----: | ------------------------- |
| `--space-1`  |  `4px` | Separaciones mínimas.     |
| `--space-2`  |  `8px` | Separaciones pequeñas.    |
| `--space-3`  | `12px` | Padding pequeño.          |
| `--space-4`  | `16px` | Separación estándar.      |
| `--space-5`  | `20px` | Separación media.         |
| `--space-6`  | `24px` | Padding principal y gaps. |
| `--space-8`  | `32px` | Padding amplio.           |
| `--space-10` | `40px` | Separación grande.        |
| `--space-12` | `48px` | Separación extra grande.  |

### Regla

Cuando exista un token apropiado, no deben utilizarse valores arbitrarios.

Preferir:

```css
margin-bottom: var(--space-4);
```

en lugar de:

```css
margin-bottom: 16px;
```

---

# 10. Border Radius

| Token           |    Valor | Uso                                  |
| --------------- | -------: | ------------------------------------ |
| `--radius-sm`   |    `6px` | Inputs y botones.                    |
| `--radius-md`   |    `8px` | Callouts y tarjetas pequeñas.        |
| `--radius-lg`   |   `12px` | Componentes principales.             |
| `--radius-xl`   |   `16px` | Sidebar y panel principal.           |
| `--radius-full` | `9999px` | Elementos completamente redondeados. |

---

# 11. Bordes

| Token                   | Valor | Uso                         |
| ----------------------- | ----: | --------------------------- |
| `--border-width-thin`   | `1px` | Bordes generales.           |
| `--border-width-accent` | `4px` | Bordes laterales de acento. |

El borde institucional lateral debe utilizar:

```css
border-left: var(--border-width-accent) solid var(--color-primary);
```

---

# 12. Sombras

El diseño de SIAAPI utiliza una estética principalmente plana.

Las sombras deben ser sutiles y no competir visualmente con los bordes.

| Token           | Valor                            | Estado        | Uso                       |
| --------------- | -------------------------------- | ------------- | ------------------------- |
| `--shadow-none` | `none`                           | `CONFIRMED`   | Elementos planos.         |
| `--shadow-sm`   | `0 2px 8px rgba(0, 0, 0, 0.05)`  | `PROVISIONAL` | Tarjetas y paneles.       |
| `--shadow-md`   | `0 4px 12px rgba(0, 0, 0, 0.03)` | `PROVISIONAL` | Contenedores principales. |

### Regla

No utilizar sombras fuertes.

Evitar valores como:

```css
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
```

salvo que posteriormente se incorpore explícitamente al sistema de diseño.

---

# 13. Layout

## 13.1 Sidebar

| Token                 |   Valor | Estado        |
| --------------------- | ------: | ------------- |
| `--sidebar-width`     | `300px` | `PROVISIONAL` |
| `--sidebar-min-width` | `280px` | `PROVISIONAL` |
| `--sidebar-max-width` | `320px` | `PROVISIONAL` |

En desktop, el Sidebar debe mantener un ancho estable dentro de estos límites.

---

## 13.2 Separación del layout

| Token          |  Valor | Estado        |
| -------------- | -----: | ------------- |
| `--layout-gap` | `24px` | `PROVISIONAL` |

La separación entre Sidebar y contenido principal debe utilizar:

```css
gap: var(--layout-gap);
```

---

## 13.3 Padding de contenedores

| Token                        |  Valor | Estado        |
| ---------------------------- | -----: | ------------- |
| `--container-padding`        | `32px` | `PROVISIONAL` |
| `--container-padding-mobile` | `16px` | `PROVISIONAL` |

En desktop:

```css
padding: var(--container-padding);
```

En mobile:

```css
padding: var(--container-padding-mobile);
```

---

# 14. Dimensiones de componentes

## 14.1 Input

| Token               |  Valor | Estado        |
| ------------------- | -----: | ------------- |
| `--input-height`    | `40px` | `PROVISIONAL` |
| `--input-padding-x` | `12px` | `PROVISIONAL` |
| `--input-padding-y` |  `8px` | `PROVISIONAL` |

---

## 14.2 Botón

| Token                |  Valor | Estado        |
| -------------------- | -----: | ------------- |
| `--button-height`    | `40px` | `PROVISIONAL` |
| `--button-padding-x` | `16px` | `PROVISIONAL` |
| `--button-padding-y` |  `8px` | `PROVISIONAL` |

---

## 14.3 Navegación

| Token                  |  Valor | Estado        |
| ---------------------- | -----: | ------------- |
| `--nav-item-height`    | `40px` | `PROVISIONAL` |
| `--nav-item-padding-x` | `16px` | `PROVISIONAL` |
| `--nav-item-padding-y` |  `8px` | `PROVISIONAL` |

---

# 15. Estados de navegación

## 15.1 Estado normal

```text
Background:
transparent

Text:
--color-text
```

---

## 15.2 Estado hover

El estado hover debe ser sutil.

Valor provisional:

```text
Background:
--color-selection-background

Text:
--color-text
```

---

## 15.3 Estado activo

El elemento activo utiliza:

```text
Background:
--color-selection-background

Text:
--color-primary

Font Weight:
--font-weight-bold
```

El estado activo representa visualmente la sección actual del usuario.

---

# 16. Componentes

Los siguientes componentes forman parte del sistema visual inicial.

## Header

Responsabilidades:

* Mostrar identidad institucional.
* Mostrar nombre/acrónimo SIAAPI.
* Mostrar ante-título.
* Mostrar línea decorativa.
* Mantener jerarquía tipográfica consistente.

Tokens principales:

```text
--color-primary
--color-text
--color-text-secondary
--font-size-xs
--font-size-2xl
--font-size-3xl
--font-weight-bold
--space-*
```

---

## Card / Panel

Características:

```text
Background:
--color-surface

Border:
--border-width-thin
--color-border

Border Radius:
--radius-xl

Shadow:
--shadow-sm
```

---

## SearchInput

Características:

```text
Height:
--input-height

Border:
--border-width-thin
--color-border

Border Radius:
--radius-sm

Padding:
--input-padding-x
--input-padding-y
```

El botón asociado a la búsqueda utiliza:

```text
Background:
--color-primary

Text:
--color-text-on-primary
```

---

## SidebarNav

Características:

```text
Width:
--sidebar-width

Background:
--color-surface

Border:
--border-width-thin
--color-border

Border Radius:
--radius-xl
```

---

## NavItem

### Normal

```text
Color:
--color-text
```

### Hover

```text
Background:
--color-selection-background
```

### Active

```text
Background:
--color-selection-background

Color:
--color-primary

Font Weight:
--font-weight-bold
```

---

## CalloutBanner

Características:

```text
Background:
--color-selection-background

Border:
--border-width-accent
--color-primary

Border Radius:
--radius-md
```

---

## SectionTitle

Características:

```text
Font Size:
--font-size-xl

Font Weight:
--font-weight-bold

Color:
--color-text
```

El ante-título debe utilizar:

```text
Font Size:
--font-size-xs

Font Weight:
--font-weight-bold

Color:
--color-text-secondary
```

---

# 17. Responsive

El sistema contempla inicialmente tres contextos:

```text
Desktop
Tablet
Mobile
```

Los valores exactos de breakpoints todavía deben confirmarse.

## Desktop

Características:

```text
Sidebar:
visible

Layout:
2 columnas

Sidebar:
--sidebar-width

Gap:
--layout-gap

Container Padding:
--container-padding
```

---

## Tablet

El Sidebar puede convertirse en:

* Drawer.
* Menú colapsable.
* Menú superior.

La decisión final todavía está pendiente.

---

## Mobile

Características:

```text
Sidebar:
colapsado / drawer

Search:
100% del ancho disponible

Container Padding:
--container-padding-mobile
```

Los tamaños tipográficos deberán reducirse únicamente cuando sea necesario para preservar la jerarquía visual.

---

# 18. Breakpoints

Los breakpoints exactos todavía están pendientes de confirmación.

No deben crearse múltiples breakpoints arbitrarios.

Valores provisionales:

| Token                  |    Valor | Estado        |
| ---------------------- | -------: | ------------- |
| `--breakpoint-mobile`  |  `640px` | `PROVISIONAL` |
| `--breakpoint-tablet`  |  `768px` | `PROVISIONAL` |
| `--breakpoint-desktop` | `1024px` | `PROVISIONAL` |
| `--breakpoint-wide`    | `1280px` | `PROVISIONAL` |

Los valores podrán modificarse después de validar las referencias visuales y el comportamiento real de la aplicación.

---

# 19. Iconografía

La interfaz utiliza iconos principalmente para:

* Búsqueda.
* Chevron de navegación.
* Menú móvil.
* Indicadores de estado.

Los iconos deben mantener un estilo visual consistente.

No se deben mezclar arbitrariamente diferentes familias de iconos.

La biblioteca de iconos todavía está:

```text
TODO
```

Hasta definirla, los componentes deberán abstraer los iconos de manera que sea posible sustituir la biblioteca posteriormente sin modificar la estructura visual de los componentes.

---

# 20. Logo e identidad gráfica

Actualmente la identidad visual está basada principalmente en elementos tipográficos.

Estado:

```text
Favicon:
TODO

Logotipo gráfico:
TODO

Logo institucional:
TODO
```

No se deben inventar logotipos ni elementos gráficos que no estén presentes en la referencia visual.

---

# 21. Reglas de uso

## Regla 1 — No utilizar valores arbitrarios

Si existe un token apropiado, debe utilizarse.

Correcto:

```css
padding: var(--space-6);
```

Incorrecto:

```css
padding: 27px;
```

---

## Regla 2 — No duplicar colores

Correcto:

```css
color: var(--color-primary);
```

Incorrecto:

```css
color: #B21E27;
```

Los valores de color deben definirse únicamente en el sistema de tokens.

---

## Regla 3 — No crear nuevos colores sin actualizar los tokens

Si un nuevo componente requiere un color que no existe:

1. Verificar si algún token existente puede utilizarse.
2. Si no existe, determinar si realmente se necesita un nuevo token.
3. Agregar el nuevo token a este documento.
4. Agregarlo a `tokens.css`.
5. Utilizar el nuevo token en el componente.

---

## Regla 4 — No crear escalas paralelas

No crear valores como:

```text
17px
19px
23px
27px
31px
```

si existe un token de escala apropiado.

La intención del sistema es mantener una cantidad limitada de valores reutilizables.

---

## Regla 5 — Los componentes utilizan tokens semánticos

Los componentes deben utilizar tokens semánticos.

Preferir:

```css
background: var(--color-primary);
```

sobre:

```css
background: var(--red-700);
```

La aplicación debe expresar la función del color y no depender de una escala cromática interna.

---

# 22. Regla para Antigravity

Cuando Antigravity implemente o modifique una página:

1. Debe consultar `docs/design.md`.
2. Debe consultar `docs/design-tokens.md`.
3. Debe revisar la referencia visual correspondiente en `static/referencia/`.
4. Debe reutilizar los componentes existentes.
5. Debe utilizar los Design Tokens existentes.
6. No debe inventar nuevos colores, tipografías, espaciados, radios o sombras cuando exista un token equivalente.
7. No debe modificar un token global para resolver un problema específico de un único componente.
8. Si necesita un nuevo token, debe justificarlo y agregarlo al sistema de diseño.
9. Debe mantener consistencia visual entre todas las páginas.
10. Los valores marcados como `PROVISIONAL` pueden modificarse únicamente cuando exista evidencia visual o una decisión explícita de diseño.
11. Los valores marcados como `TODO` no deben ser inventados.
12. Una página nueva debe integrarse al sistema de diseño existente en lugar de crear un sistema visual independiente.

---

# 23. Fuente de verdad

La prioridad de las fuentes de diseño es:

```text
1. Referencia visual específica de la página
2. docs/design.md
3. docs/design-tokens.md
4. tokens.css
5. Componentes existentes
```

Cuando exista una discrepancia entre una implementación existente y los documentos de diseño, la implementación debe adaptarse al sistema de diseño.

Los tokens implementados en `tokens.css` deben mantenerse sincronizados con este documento.

---

# 24. Implementación

Los tokens deberán implementarse en:

```text
src/lib/styles/tokens.css
```

Las variables globales deberán declararse preferentemente dentro de:

```css
:root {
    /* tokens */
}
```

Ejemplo:

```css
:root {
    --color-primary: #B21E27;
    --color-background: #F8FAFC;
    --color-surface: #FFFFFF;

    --space-4: 16px;
    --space-6: 24px;

    --radius-md: 8px;
    --radius-xl: 16px;
}
```

Los componentes Svelte deberán consumir estos valores mediante:

```css
var(--nombre-del-token)
```

---

# 25. Tokens pendientes de validación

Los siguientes aspectos deben validarse posteriormente contra la referencia visual original:

* [ ] Color primario exacto.
* [ ] Color de fondo exacto.
* [ ] Color de selección exacto.
* [ ] Color de texto exacto.
* [ ] Color de bordes exacto.
* [ ] Familia tipográfica definitiva.
* [ ] Tamaños tipográficos definitivos.
* [ ] Ancho definitivo del Sidebar.
* [ ] Breakpoints definitivos.
* [ ] Estados hover.
* [ ] Estados active/pressed.
* [ ] Comportamiento responsive del Sidebar.
* [ ] Biblioteca de iconos.
* [ ] Favicon.
* [ ] Logotipo institucional.

---

# 26. Principio general

SIAAPI debe mantener una apariencia:

* Institucional.
* Profesional.
* Limpia.
* Sobria.
* Consistente.
* Principalmente plana.
* Con el rojo institucional como color de acento.
* Con fondos claros.
* Con bordes sutiles.
* Con sombras mínimas.
* Con una jerarquía tipográfica clara.

Los Design Tokens son la única fuente de valores visuales reutilizables de la aplicación.

Toda nueva interfaz debe construirse sobre este sistema en lugar de introducir estilos independientes.

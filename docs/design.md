
# design.md — Sistema de Diseño (SIAAPI)

Este documento sirve como especificación del sistema de diseño a partir de la interfaz de referencia del **Sistema de Información para la Administración de Proyectos de Investigación (SIAAPI)**.

---

## 1. Referencia visual

La referencia principal de la página de inicio se encuentra en:

`static/referencia/home/escritorio.png`

La implementación debe respetar la estructura visual, jerarquía y estilo general de esta referencia.

---


## 2. Colores Principales y Secundarios

* **Color Primario (Rojo Institucional):**
* Rojo vino / institucional (`#B21E27` o similar) utilizado en:
* Acrónimo del título ("SIAAPI").
* Línea decorativa inferior bajo el título principal.
* Borde lateral izquierdo de la barra lateral (Sidebar) y del banner promocional/informativo.
* Botón primario de búsqueda ("Buscar").
* Texto destacado dentro del cuerpo del mensaje ("área académica").
* Indicador de punto en "Consulta institucional".




* **Color Secundario / Fondo de Selección (Rojo Suave / Rosa Claro):**
* Fondo pastel o rosado (`#FDF0F0` o similar) utilizado para marcar el ítem activo en el menú lateral ("Inicio") y el fondo del card/banner inferior en el contenido principal.


* **Color Neutral Principal (Texto):**
* Gris oscuro / Casi negro (`#1F2937` o `#2D3748`) para títulos principales, subtítulos y cuerpo de texto.
* Gris medio / secundario (`#6B7280`) para etiquetas superiores ("PORTAL INSTITUCIONAL DE INVESTIGACIÓN", "UAM AZCAPOTZALCO..."), placeholder de buscador y chevron icons.


* **Fondo de Contenedores y Fondo General:**
* Fondo general de la aplicación: Gris muy claro / Canvas suave (`#F8FAFC` o `#F3F4F6`).
* Fondo de tarjetas/paneles: Blanco puro (`#FFFFFF`).


* **Bordes:**
* Gris claro tenue (`#E5E7EB` o `#EAECF0`) para delimitar contenedores, campos de entrada y separadores horizontales.



---

## 3. Tipografía y Jerarquía Tipográfica

* **Familia Tipográfica:** Sans-serif moderna, limpia y geométrica (por confirmar nombre exacto de la fuente; alternativas estándar: *Inter*, *Roboto*, *Plus Jakarta Sans* o *Open Sans*).
* **Jerarquía Visual:**
1. **Top Label / Ante-título:** Texto en mayúsculas, tamaño pequeño (approx. `11px - 12px`), peso `Bold` / `SemiBold`, color rojo o gris según sección.
2. **Título Principal de la Aplicación:** Tamaño grande (approx. `24px - 28px`), peso `Bold`, color gris oscuro con resaltado en rojo.
3. **Título de Sección (H1 / H2 interior):** Tamaño mediano-alto (approx. `20px - 22px`), peso `Bold`, color gris muy oscuro.
4. **Subtítulos y Headers de Menú:** Mayúsculas, tamaño pequeño (approx. `11px - 12px`), peso `Bold`, color gris neutro medio.
5. **Cuerpo de Texto / Parrafitos:** Tamaño regular (approx. `14px - 15px`), peso `Regular` (`400`), interlineado espacioso (approx. `1.5` - `1.6`), alineación justificada o izquierda.
6. **Texto Destacado en Menú (Active Item):** Tamaño regular (`14px`), peso `Bold`, color rojo.



---

## 4. Espaciados

* **Padding Contenedores Principales:** Espaciado amplio interior en los paneles blancos (approx. `24px` a `32px`).
* **Gap entre Paneles (Layout):** Separación de approx. `20px` a `24px` entre la barra lateral (Sidebar) y el área de contenido principal.
* **Padding Menú Lateral:** Items del menú con padding vertical de `8px - 12px` y horizontal de `12px - 16px`.
* **Espaciado Inter-parrafo:** Margen inferior amplio entre párrafos (`16px - 20px`) para favorecer la lectura.

---

## 5. Bordes y Border-Radius

* **Border-Radius:**
* Contenedores principales (Sidebar y Main Content Panel): Esquinas redondeadas suaves (approx. `12px` a `16px`).
* Input de búsqueda y botón "Buscar": Redondeado ligero (approx. `6px` a `8px`).
* Banner interior/Tarjeta inferior: Redondeado medio (approx. `8px`).


* **Bordes (Borders):**
* Borde continuo ligero de `1px` color gris claro en el contorno de la barra lateral, el panel principal, la tarjeta inferior y el input de búsqueda.
* Borde acentuado (Accent Border Left): `3px` a `4px` en rojo en el lateral izquierdo del panel de contenido y de la tarjeta inferior.



---

## 6. Sombras

* **Elevation / Shadows:**
* Sombra muy tenue y difusa tipo `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03)` o `0 2px 8px rgba(0, 0, 0, 0.05)` en los contenedores blancos principales.
* Prácticamente plano (Flat Design) con definición basada principalmente en bordes claros de `1px`.



---

## 7. Estructura General del Layout

* **Header Superior (Header Institucional):**
* Ocupa el ancho completo superior dentro de una tarjeta contenedor.
* Incluye ante-título en rojo, título principal grande con acrónimo destacado y una línea divisoria / acento rojo abajo a la izquierda.


* **Layout Principal de 2 Columnas (Sidebar + Content):**
* **Columna Izquierda (Sidebar / Menú de Navegación):** Ancho fijo (approx. `280px` - `320px`). Contiene el buscador, ítems de navegación en acordeón y enlace inferior.
* **Columna Derecha (Main Content Area):** Ancho flexible (ocupa el resto del espacio disponible). Contiene el título de la página activa, texto descriptivo y tarjetas informativas.



---

## 8. Componentes Visuales Identificados

1. **Header Principal:** Encabezado con marca/título del sistema y acento visual.
2. **Input de Búsqueda Compuesto:** Campo de texto con icono de lupa + botón de acción "Buscar" acoplado.
3. **Menú de Navegación Vertical (Sidebar Nav):**
* Encabezados de sección ("DEPARTAMENTOS ACADÉMICOS").
* Elementos seleccionados con estado *Active* (fondo rosado y texto rojo).
* Elementos colapsables (Acordeón) con icono de flecha hacia abajo (`chevron-down`).


4. **Tarjeta Contenedora (Card Wrapper):** Panel blanco con borde redondeado y sombra ligera.
5. **Callout / Banner Informativo (Callout Box):** Cuadro con fondo rosado claro, borde lateral rojo y texto descriptivo.
6. **Línea Decorativa / Divider:** Acento rojo horizontal debajo del título principal.

---

## 9. Elementos Propuestos como Componentes Svelte Reutilizables

1. `<Header/>`: Encabezado institucional con título, subtítulo y acentos visuales configurables.
2. `<Card/>` o `<Panel/>`: Contenedor blanco genérico con `border-radius` y `border` personalizable (para envolver Sidebar y Main Content).
3. `<SearchInput/>`: Componente reutilizable con campo de texto e integración de botón/acción de búsqueda.
4. `<SidebarNav/>`: Menú completo de navegación lateral.
5. `<NavGroup/>` / `<NavItem/>`: Subcomponentes para gestionar ítems de menú activos, hover y colapsables.
6. `<CalloutBanner/>`: Componente para destacar notas o llamados a la acción (con la barra roja lateral y fondo pastel).
7. `<SectionTitle/>`: Para estandarizar los títulos de las páginas internas con su respectivo ante-título en mayúsculas.

---

## 10. Comportamiento Responsive a Considerar

* **Desktop (Layout actual):** Dos columnas visibles (Sidebar a la izquierda, Contenido a la derecha).
* **Tablet / Mobile:**
* El Sidebar debe convertirse en un menú desplegable (Drawer / Hamburger Menu) o pasar a la parte superior sobre el contenido principal.
* El Input de Búsqueda debe expandirse al 100% del ancho del contenedor.
* Ajustar el padding de los contenedores blancos (`24px` -> `16px`).
* Los títulos principales deben reducir su tamaño tipográfico proporcionalmente.



---

## 11. Aspectos Visuales no Determinables con Certeza (Por Confirmar)

* **Nombre exacto de la tipografía:** *Por confirmar* (se recomienda usar *Inter* o *Roboto* provisionalmente).
* **Códigos HEX exactos de color:** *Por confirmar* mediante cuentagotas directo sobre el render final.
* **Comportamiento exacto del acordeón (desplegado):** *Por confirmar* (si permite múltiple apertura o solo un departamento a la vez).
* **Favicon / Logotipos gráficos:** *Por confirmar* (actualmente es una interfaz predominantemente tipográfica).
* **Estado Hover de los botones e ítems de menú:** *Por confirmar* (oscurecimiento de rojo en botón, sombras en hover, etc.).

## 12. Reglas de implementación

1. Los valores visuales definidos como Design Tokens deben utilizarse mediante variables CSS.
2. Los componentes no deben definir colores, tamaños, espaciados, sombras o radios arbitrariamente si existe un token equivalente.
3. No introducir nuevos colores sin actualizar primero el sistema de diseño.
4. No introducir nuevos tamaños de fuente sin actualizar primero la escala tipográfica.
5. No introducir nuevos valores de spacing sin justificar su necesidad.
6. Las páginas deben reutilizar componentes existentes antes de crear componentes nuevos.
7. Los componentes deben ser visualmente consistentes entre páginas.
8. Las referencias visuales sirven como fuente de verdad para la apariencia.
9. Cuando exista discrepancia entre una página existente y este documento, debe priorizarse este documento.
10. Los valores marcados como PROVISIONAL pueden cambiar cuando se obtenga información visual más precisa.
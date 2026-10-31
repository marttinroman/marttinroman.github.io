# SRS — Functional Specifications

> **Document:** Software Requirements Specification (SRS) — Functional Specifications  
> **Phase:** Fase 2 (Architecture)  
> **Project:** Marttin Roman Portfolio & Autonomous QA / AI-TestOps Showcase  
> **Last Updated:** 2026-10-30  

---

## 1. Traceability Matrix (Epic → User Story → Functional Requirement)

| Epic | User Story | Functional Requirement ID | Summary |
| ---- | ---------- | ------------------------- | ------- |
| **EPIC-PORT-001** (i18n) | US 1.1 | **FR-001** | Default English Locale Loading |
| | US 1.2 | **FR-002** | Client-Side Language Toggle (EN/ES) |
| | US 1.3 | **FR-003** | Language Preference Persistence |
| | US 1.4 | **FR-004** | Seamless Layout Reflow on Locale Switch |
| **EPIC-PORT-002** (Theming) | US 2.1 | **FR-005** | System Theme Auto-Detection |
| | US 2.2 | **FR-006** | Manual Dark/Light Mode Toggle |
| | US 2.3 | **FR-007** | High-Contrast Light Mode Token Application |
| | US 2.4 | **FR-008** | Theme Preference Persistence |
| **EPIC-PORT-003** (Hero) | US 3.1 | **FR-009** | Hero Profile Rendering with Dual Fallback Avatar |
| | US 3.2 | **FR-010** | Live Status Availability Badge Rendering |
| | US 3.3 | **FR-011** | Hero Primary Action CTAs |
| **EPIC-PORT-004** (Specialties) | US 4.1 | **FR-012** | Core Technical Specialties Grid Rendering |
| | US 4.2 | **FR-013** | Dynamic Specialty Content Binding |
| | US 4.3 | **FR-014** | Filterable/Categorized Tech Stack Badge Cloud |
| **EPIC-PORT-005** (Showcase) | US 5.1 | **FR-015** | Flagship Autonomous QA & AI-TestOps Showcase Card |
| | US 5.2 | **FR-016** | 3-Layer Validation Architecture Interactive Breakdown |
| | US 5.3 | **FR-017** | Direct External Repository Navigation |
| | US 5.4 | **FR-018** | Business Value & $0 Infrastructure Highlight Box |
| **EPIC-PORT-006** (Conversion) | US 6.1 | **FR-019** | LinkedIn Outbound Link with Security Sanitization |
| | US 6.2 | **FR-020** | Pre-Populated Mailto Trigger |
| | US 6.3 | **FR-021** | Direct Contact Copy-to-Clipboard Fallback |
| **EPIC-PORT-007** (Platform) | US 7.1 | **FR-022** | Sub-Second Static Asset Delivery |
| | US 7.2 | **FR-023** | Keyboard Navigation & Accessible ARIA Tree |
| | US 7.3 | **FR-024** | Automated GitHub Pages CI/CD Deployment |

---

## 2. Functional Requirements Detailed Specifications

### FR-001: El sistema debe cargar el idioma inglés por defecto al primer acceso
- **Relacionado a:** EPIC-PORT-001 (i18n), US 1.1
- **Input:** Evento de carga de página (`DOMContentLoaded`), lectura de `localStorage.getItem('preferred_locale')` y `navigator.language`.
- **Processing:**
  1. Comprobar si existe `preferred_locale` en `localStorage`.
  2. Si no existe, fijar por defecto `locale = 'en'`.
  3. Ejecutar función de traducción inyectando el diccionario en inglés a los nodos con atributos `data-i18n`.
- **Output:** DOM con textos, etiquetas y atributos `aria-label` en inglés.
- **Validations:** Los valores válidos de locale son exclusivamente `en` o `es`.

### FR-002: El sistema debe permitir alternar dinámicamente entre inglés y español
- **Relacionado a:** EPIC-PORT-001 (i18n), US 1.2
- **Input:** Evento `click` o `keydown` (Enter/Espacio) en el botón del selector de idioma (`#lang-toggle`).
- **Processing:**
  1. Si el estado actual es `en`, cambiar a `es`; si es `es`, cambiar a `en`.
  2. Recorrer todos los elementos con atributo `data-i18n="[key]"`.
  3. Reemplazar `textContent` o `innerHTML` según la definición del diccionario local.
  4. Actualizar el atributo `<html lang="[locale]">`.
  5. Actualizar el texto o indicador visual del botón de idioma.
- **Output:** Interfaz traducida instantáneamente sin recarga de página (*zero-reload*).
- **Validations:** Cada clave en el diccionario debe tener traducción definida en ambos idiomas; si falta una clave, mantener el texto en inglés como fallback.

### FR-003: El sistema debe persistir la preferencia de idioma en el almacenamiento local
- **Relacionado a:** EPIC-PORT-001 (i18n), US 1.3
- **Input:** Clave `locale` ('en' | 'es') seleccionada por el usuario.
- **Processing:**
  1. Invocar `localStorage.setItem('preferred_locale', locale)`.
  2. Capturar y aislar cualquier excepción de cuota o restricción de navegación privada (`try/catch`).
- **Output:** Valor persistido en el navegador del cliente.
- **Validations:** Almacenar solo strings sanitizados ('en' o 'es').

### FR-004: El sistema debe mantener la integridad del diseño durante el cambio de idioma
- **Relacionado a:** EPIC-PORT-001 (i18n), US 1.4
- **Input:** Cambio de longitud de cadenas de texto entre EN y ES (ej. ~15-20% más largo en español).
- **Processing:**
  1. El layout utiliza CSS Grid y Flexbox responsivo con alturas adaptables (`min-h`, `auto`).
  2. Los contenedores de texto previenen desbordamientos mediante `break-words` y `leading-relaxed`.
- **Output:** Elementos alineados sin solapamientos ni desbordamiento horizontal (*no horizontal overflow*).
- **Validations:** La anchura del `<body>` debe mantenerse en `100vw` sin activar barra de desplazamiento horizontal.

### FR-005: El sistema debe autodetectar y aplicar el tema visual del sistema operativo
- **Relacionado a:** EPIC-PORT-002 (Theming), US 2.1
- **Input:** Query de medios CSS `window.matchMedia('(prefers-color-scheme: dark)')`.
- **Processing:**
  1. Verificar si existe preferencia manual en `localStorage.getItem('preferred_theme')`.
  2. Si no existe, evaluar `matches` de la media query.
  3. Si es `true`, agregar clase `dark` al elemento raíz `<html>`; si es `false`, removerla.
- **Output:** Esquema visual renderizado en concordancia con el entorno del usuario.
- **Validations:** Soporte para cambio de tema en tiempo real si el usuario cambia el tema del SO mientras la página está abierta.

### FR-006: El sistema debe permitir alternar manualmente entre modo oscuro y claro
- **Relacionado a:** EPIC-PORT-002 (Theming), US 2.2
- **Input:** Evento `click` en el botón `#theme-toggle`.
- **Processing:**
  1. Comprobar si `document.documentElement.classList.contains('dark')`.
  2. Si contiene `dark`, eliminar la clase y actualizar el icono del botón (a Luna); si no contiene, agregar la clase `dark` y actualizar el icono (a Sol).
  3. Guardar el nuevo valor ('dark' | 'light') en `localStorage`.
- **Output:** Transición fluida de colores de fondo, texto y bordes.
- **Validations:** Botón interactivo con atributos `aria-label` y `role="button"` descriptivos.

### FR-007: El sistema debe aplicar tokens de alto contraste en modo claro
- **Relacionado a:** EPIC-PORT-002 (Theming), US 2.3
- **Input:** Clase `dark` ausente en `document.documentElement`.
- **Processing:**
  1. El fondo de página utiliza `bg-slate-50` / `bg-white`.
  2. Los textos principales utilizan `text-slate-900` y secundarios `text-slate-600`.
  3. Las tarjetas utilizan `bg-white border-slate-200 shadow-sm`.
- **Output:** Ratio de contraste verificado $\ge 4.5:1$ en todo el contenido textual legible.
- **Validations:** Verificación contra estándares WCAG 2.1 AA en textos y controles interactivos.

### FR-008: El sistema debe persistir la preferencia de tema visual
- **Relacionado a:** EPIC-PORT-002 (Theming), US 2.4
- **Input:** Clave de tema ('dark' | 'light').
- **Processing:** `localStorage.setItem('preferred_theme', theme)`.
- **Output:** Estado guardado para renderizado inmediato en visitas posteriores sin efecto "flash" de tema incorrecto.
- **Validations:** Script bloqueante mínimo en el `<head>` para evaluar el tema antes de que se dibuje el primer frame del DOM.

### FR-009: El sistema debe renderizar el perfil profesional con avatar y fallback automático
- **Relacionado a:** EPIC-PORT-003 (Hero), US 3.1
- **Input:** URL del avatar de GitHub `https://github.com/marttinroman.png`.
- **Processing:**
  1. Renderizar etiqueta `<img>` con `src="https://github.com/marttinroman.png"`, `loading="eager"` y atributos `alt="Marttin Roman"`.
  2. Implementar controlador de error en línea `onerror="this.src='https://ui-avatars.com/api/?name=Marttin+Roman&background=0f172a&color=38bdf8&size=256'"`.
- **Output:** Avatar circular o con esquinas redondeadas de alta resolución con halo degradado.
- **Validations:** Si la imagen falla o se encuentra offline, cargar el avatar generado de iniciales sin romper el layout.

### FR-010: El sistema debe mostrar la insignia de disponibilidad para roles internacionales
- **Relacionado a:** EPIC-PORT-003 (Hero), US 3.2
- **Input:** Variable de estado de disponibilidad (activa en MVP).
- **Processing:**
  1. Renderizar contenedor con estilo pill: fondo esmeralda semitransparente, borde verde suave y texto con tipografía monoespaciada.
  2. Incluir elemento visual de pulso con animación CSS (`animate-pulse`).
  3. Vincular clave de traducción para mostrar *"Available for remote & international roles"* (EN) o *"Disponible para roles remotos e internacionales"* (ES).
- **Output:** Badge visible en la parte superior del encabezado.
- **Validations:** Texto traducible y responsive para no desbordar en pantallas móviles de 320px.

### FR-011: El sistema debe proveer enlaces de acción directa en el Hero
- **Relacionado a:** EPIC-PORT-003 (Hero), US 3.3
- **Input:** Clicks en los botones de acción del Hero (GitHub, LinkedIn, Contactar).
- **Processing:**
  1. Botón GitHub: Abre `https://github.com/marttinroman` con `target="_blank"` y `rel="noopener noreferrer"`.
  2. Botón LinkedIn: Abre `https://linkedin.com/in/marttinroman` con `target="_blank"` y `rel="noopener noreferrer"`.
  3. Botón Contactar: Ejecuta enlace de protocolo `mailto:`.
- **Output:** Navegación o activación de cliente de correo externa sin perder la sesión activa.
- **Validations:** Enlaces externos estrictamente protegidos con `rel="noopener noreferrer"`.

### FR-012: El sistema debe renderizar la cuadrícula de especialidades técnicas
- **Relacionado a:** EPIC-PORT-004 (Specialties), US 4.1
- **Input:** Estructura de 3 especialidades clave: Automation Frameworks, AI & RAG Validation, CI/CD TestOps.
- **Processing:**
  1. Renderizar cuadrícula CSS responsiva (`grid-cols-1 md:grid-cols-3`).
  2. Asignar iconos Lucide dedicados (`shield-check`, `bot`, `git-branch`).
  3. Mapear colores de acento por especialidad (azul cielo, púrpura, esmeralda).
- **Output:** 3 tarjetas con diseño moderno, bordes sutiles y efectos hover.
- **Validations:** El layout debe apilarse verticalmente en móviles y horizontalmente en escritorio.

### FR-013: El sistema debe enlazar dinámicamente el contenido de especialidades al locale activo
- **Relacionado a:** EPIC-PORT-004 (Specialties), US 4.2
- **Input:** Clave de locale activa ('en' | 'es').
- **Processing:** Actualizar títulos y descripciones de las tarjetas de especialidad según el diccionario de i18n.
- **Output:** Copys precisos que destacan Playwright, Page Object Model, pruebas semánticas y Quality Gates en el idioma seleccionado.
- **Validations:** Sin textos truncados; mantener tamaño de fuente uniforme.

### FR-014: El sistema debe mostrar el catálogo de tecnologías y herramientas
- **Relacionado a:** EPIC-PORT-004 (Specialties), US 4.3
- **Input:** Lista de tecnologías: Playwright, TypeScript, Python, Docker, GitHub Actions, k6, REST & GraphQL APIs, Azure DevOps, AI Evaluation (LLMs/RAG).
- **Processing:**
  1. Renderizar contenedor de chips flexibles (`flex flex-wrap gap-2`).
  2. Estilizar cada chip con fondo contrastante, borde fino y fuente monoespaciada de tamaño uniforme.
- **Output:** Nube visual de herramientas reconocibles para reclutadores técnicos y ATS.
- **Validations:** Texto limpio sin errores tipográficos.

### FR-015: El sistema debe presentar la tarjeta principal de la solución Autonomous QA & AI-TestOps Engine
- **Relacionado a:** EPIC-PORT-005 (Showcase), US 5.1
- **Input:** Ficha del proyecto estrella con título, resumen, impacto y enlaces de repositorio.
- **Processing:**
  1. Renderizar tarjeta destacada con borde de acento interactivo.
  2. Mostrar cabecera visual con icono técnico representativo y etiquetas de arquitectura.
  3. Presentar descripción del problema resuelto: gobernanza continua de calidad para aplicaciones con IA y APIs.
- **Output:** Componente central que comunica autoridad en TestOps moderno.
- **Validations:** Información alineada con la constitución de negocio de Fase 1.

### FR-016: El sistema debe detallar las 3 capas de validación del motor de pruebas
- **Relacionado a:** EPIC-PORT-005 (Showcase), US 5.2
- **Input:** Especificación de las tres capas:
  1. *UI & Critical Flows:* Playwright, TypeScript, POM, paralelización.
  2. *API Validation:* Validación estricta de schemas JSON, latencia, códigos HTTP.
  3. *AI Evaluation:* RAG harness, similitud de coseno, control de alucinaciones.
- **Processing:** Renderizar lista estructurada con micro-insignias e indicadores visuales de cada capa.
- **Output:** Explicación técnica comprensible para CTOs y directores de QA.
- **Validations:** Términos técnicos precisos y traducidos correctamente en ambos idiomas.

### FR-017: El sistema debe proveer enlace directo y seguro a los repositorios de código
- **Relacionado a:** EPIC-PORT-005 (Showcase), US 5.3
- **Input:** Enlaces a repositorios en GitHub (`https://github.com/marttinroman`).
- **Processing:** Renderizar enlace con icono externo (`external-link`), tooltip informativo y atributos de seguridad.
- **Output:** Navegación en nueva pestaña hacia el código fuente verificable.
- **Validations:** URL canónica válida hacia GitHub.

### FR-018: El sistema debe enfatizar el valor de negocio de costo de infraestructura $0
- **Relacionado a:** EPIC-PORT-005 (Showcase), US 5.4
- **Input:** Bloque de valor económico: uso eficiente de GitHub Actions efímeros y GitHub Pages.
- **Processing:** Renderizar caja de impacto destacado con icono de métrica o dólar tachado ($0 Infra).
- **Output:** Comunicación clara de que la solución opera sin costos fijos de servidores ni bases de datos dedicadas 24/7.
- **Validations:** Consistente en ambas versiones de idioma.

### FR-019: El sistema debe integrar el perfil de LinkedIn con sanitización de enlace
- **Relacionado a:** EPIC-PORT-006 (Conversion), US 6.1
- **Input:** URL pública `https://linkedin.com/in/marttinroman`.
- **Processing:** Generar tag `<a>` con `href="https://linkedin.com/in/marttinroman"`, `target="_blank"`, `rel="noopener noreferrer"`.
- **Output:** Redirección segura a LinkedIn.
- **Validations:** Enlace verificado y activo.

### FR-020: El sistema debe configurar el enlace mailto con asunto predeterminado
- **Relacionado a:** EPIC-PORT-006 (Conversion), US 6.2
- **Input:** Dirección de correo verificada y cadena de asunto codificada para URI.
- **Processing:** Generar atributo `href="mailto:marttinroman@gmail.com?subject=Inquiry%20regarding%20Senior%20SDET%20%2F%20QA%20Automation"`.
- **Output:** Apertura automática del cliente de correo nativo del usuario con los campos pre-llenados.
- **Validations:** Dirección de correo válida sin caracteres inválidos.

### FR-021: El sistema debe ofrecer copia directa de contacto al portapapeles
- **Relacionado a:** EPIC-PORT-006 (Conversion), US 6.3
- **Input:** Evento en botón secundario de copiar correo o fallback si `mailto:` no es compatible.
- **Processing:**
  1. Invocar API del navegador `navigator.clipboard.writeText(email)`.
  2. Mostrar indicador visual temporal de confirmación (ej. *"Copiado al portapapeles"* / *"Copied to clipboard"* durante 2.5 segundos).
- **Output:** Dirección copiada lista para pegar en clientes web de correo (Gmail, Outlook Web).
- **Validations:** Manejar fallback tradicional si `navigator.clipboard` no está disponible en navegadores antiguos.

### FR-022: El sistema debe despachar todos los recursos en menos de 1 segundo
- **Relacionado a:** EPIC-PORT-007 (Platform), US 7.1
- **Input:** Petición HTTP GET al dominio `marttinroman.github.io`.
- **Processing:**
  1. Servir archivo HTML único minificado.
  2. Scripts cargados con atributos `defer` o al pie de página.
  3. CDNs optimizados (Tailwind y Lucide) con cabeceras de caché HTTP.
- **Output:** First Contentful Paint (FCP) < 800ms y Largest Contentful Paint (LCP) < 1200ms.
- **Validations:** Peso total de la página inferior a 150 KB gzip.

### FR-023: El sistema debe garantizar accesibilidad completa por teclado y lectores de pantalla
- **Relacionado a:** EPIC-PORT-007 (Platform), US 7.2
- **Input:** Eventos de teclado (`Tab`, `Shift+Tab`, `Enter`, `Escape`).
- **Processing:**
  1. Orden de tabulación lógico y secuencial en todos los controles interactivos.
  2. Anillos de foco visibles (`focus:ring-2 focus:ring-sky-500 focus:outline-none`).
  3. Atributos semánticos ARIA en botones de tema e idioma (`aria-pressed`, `aria-label`).
- **Output:** Navegación fluida para personas con discapacidad visual o motora.
- **Validations:** 0 violaciones detectadas por Axe Core y Lighthouse Accessibility.

### FR-024: El sistema debe desplegarse automáticamente vía GitHub Pages
- **Relacionado a:** EPIC-PORT-007 (Platform), US 7.3
- **Input:** Push a la rama principal (`main`) en el repositorio GitHub.
- **Processing:**
  1. GitHub Pages procesa el archivo `index.html` en la raíz.
  2. Generación automática de certificados SSL/TLS con HTTPS forzado.
- **Output:** Sitio publicado en vivo en `https://marttinroman.github.io`.
- **Validations:** Despliegue completado con exit code 0 y disponibilidad inmediata en la red perimetral de GitHub.

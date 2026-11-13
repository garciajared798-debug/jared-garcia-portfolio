# Jared García — Portafolio profesional

Sitio web personal de **Jared García**, diseñador y desarrollador web. Presenta sus servicios para restaurantes, cafés, tiendas y pequeños negocios, su portafolio, precios orientativos y un formulario de contacto.

Construido con **React 19 + Vite 8**, CSS propio (sin frameworks de UI) y `lucide-react` para los iconos.

## Requisitos

- Node.js 20.19+ o 22.12+ (requerido por Vite 8)
- npm

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build
npm run lint     # análisis con oxlint
```

## Estructura

```
index.html                  Metadatos SEO, Open Graph, JSON-LD, fuentes y favicon
public/favicon.svg          Icono del sitio
src/
  App.jsx                   Composición de secciones y flujo de solicitud de cotización
  main.jsx                  Punto de entrada
  data/site.js              TODO el contenido editable (identidad, servicios, planes, proyectos)
  components/               Componentes reutilizables de cada sección
  hooks/                    Scroll spy y animaciones de aparición
  styles/
    base.css                Tokens, fondo global, animaciones, accesibilidad
    components.css          Botones, navbar, logo, marquee, footer
    sections.css            Layout de las secciones
    responsive.css          Ajustes por breakpoint
  assets/projects/          Portadas de los proyectos
```

## Editar contenido

Casi todo el texto vive en **`src/data/site.js`**:

- `site`: nombre, rol, correo, URL del portafolio y disponibilidad.
- `navLinks`, `services`, `benefits`, `plans`, `process`, `projects`.
- Los precios son **orientativos**; dominio y hosting se cobran aparte (así se indica en la interfaz).

### Agregar un proyecto al portafolio

1. Coloca la imagen de portada en `src/assets/projects/`.
2. Impórtala al inicio de `src/data/site.js`:
   ```js
   import miProyecto from '../assets/projects/mi-proyecto.jpg';
   ```
3. Agrega un objeto al arreglo `projects`:
   ```js
   {
     title: 'Nombre del proyecto',
     category: 'Tipo de proyecto',
     description: 'Qué es y qué se construyó, sin exagerar experiencia.',
     image: miProyecto,
     imageAlt: 'Descripción de la imagen',
     link: 'https://url-del-proyecto.com', // o null si no hay enlace público
     tags: ['Diseño', 'Desarrollo'],
     status: 'Publicado',
   }
   ```

La tarjeta de "próximo proyecto" ya está incluida como espacio reservado para futuros trabajos.

> Importante: solo se presenta como propio el proyecto **BIT — Comunidad para gamers**. No se atribuyen trabajos de terceros.

## Formulario de contacto

El formulario **no envía datos a un servidor**. Al enviarlo:

1. Valida los campos en el navegador.
2. Genera un enlace `mailto:garciajared798@gmail.com` con asunto y cuerpo prellenados.
3. Abre el cliente de correo del visitante.

La interfaz lo explica de forma honesta, ofrece un botón de copiar el correo y un enlace directo de respaldo. Para recibir envíos sin depender del cliente de correo habría que conectar un servicio como Formspree, Resend o una función serverless; no se simula un envío que no existe.

## Accesibilidad y rendimiento

- HTML semántico, un solo `h1`, jerarquía de encabezados consistente.
- Todos los enlaces tienen destino, los botones son reales y los campos están etiquetados.
- Navegación por teclado, `aria-expanded` en el menú móvil y foco visible.
- Respeta `prefers-reduced-motion`; las animaciones son CSS + IntersectionObserver.
- Sin dependencias de animación adicionales.

## Despliegue

El build genera archivos estáticos en `dist/`. Puede publicarse en Netlify, Vercel, Cloudflare Pages o cualquier hosting estático. Recuerda que el dominio y el hosting son costos separados de los precios del sitio.

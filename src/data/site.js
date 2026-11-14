import bitCover from '../assets/projects/bit-cover.svg';
import casaOlivaCover from '../assets/projects/casa-oliva-cover.jpg';

export const site = {
  name: 'Jared García',
  firstName: 'Jared',
  role: 'Diseñador y desarrollador web',
  email: 'garciajared798@gmail.com',
  portfolio: 'https://bit-tugv.onrender.com',
  tagline: 'Tu próximo proyecto digital comienza aquí.',
  availability: 'Disponible para nuevos proyectos',
};

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Precios', href: '#precios' },
  { label: 'Proceso', href: '#proceso' },
];

export const services = [
  {
    id: 'desde-cero',
    number: '01',
    icon: 'layout',
    title: 'Diseño de páginas web desde cero',
    description:
      'Partimos de una idea y construimos una página pensada para tu negocio: estructura, contenido, identidad visual y publicación.',
    tags: ['Estructura', 'Diseño visual', 'Publicación'],
  },
  {
    id: 'rediseno',
    number: '02',
    icon: 'refresh',
    title: 'Rediseño de páginas web',
    description:
      'Tu sitio actual puede verse mejor y funcionar mejor. Renuevo el diseño, mejoro la jerarquía visual y adapto la experiencia a los objetivos de tu negocio.',
    tags: ['Nueva imagen', 'Usabilidad', 'Responsive'],
  },
  {
    id: 'restaurantes',
    number: '03',
    icon: 'utensils',
    title: 'Páginas web para restaurantes',
    description:
      'Menú digital, información del local, reservas y contacto. Una presencia web que abre el apetito antes de que el cliente llegue.',
    tags: ['Menú digital', 'Reservas', 'Ubicación'],
  },
  {
    id: 'tiendas',
    number: '04',
    icon: 'store',
    title: 'Páginas para tiendas y emprendimientos',
    description:
      'Presenta tus productos y tu historia con una imagen profesional que transmita confianza y facilite que tus clientes te contacten.',
    tags: ['Catálogo', 'Marca', 'Conversión'],
  },
  {
    id: 'responsive',
    number: '05',
    icon: 'smartphone',
    title: 'Diseño responsive',
    description:
      'Tu página se adapta con precisión a celulares, tablets y computadoras. La misma experiencia cuidada en cualquier pantalla.',
    tags: ['Móvil', 'Tablet', 'Escritorio'],
  },
];

export const benefits = [
  {
    number: '01',
    icon: 'globe',
    title: 'Mayor presencia digital',
    description:
      'Tus clientes pueden encontrarte en Internet y conocer tu negocio antes de escribirte o visitarte.',
  },
  {
    number: '02',
    icon: 'badge',
    title: 'Presentación profesional',
    description:
      'Una imagen cuidada y coherente genera confianza desde el primer segundo y te diferencia de la competencia.',
  },
  {
    number: '03',
    icon: 'products',
    title: 'Productos y servicios a la vista',
    description:
      'Muestra tu menú, catálogo o servicios con fotos, precios y descripciones organizadas para que el cliente decida.',
  },
  {
    number: '04',
    icon: 'info',
    title: 'Información disponible',
    description:
      'Horarios, ubicación, preguntas frecuentes y todo lo que tus clientes necesitan saber, disponible a cualquier hora.',
  },
  {
    number: '05',
    icon: 'contact',
    title: 'Acceso directo al contacto',
    description:
      'Botones y enlaces reales para escribirte, llamarte o llegar a tu local sin pasos innecesarios.',
  },
];

export const plans = [
  {
    id: 'basica',
    name: 'Página básica',
    price: '$50 – $70',
    description: 'Una presencia digital clara para dar el primer paso.',
    features: [
      'Página de una sola vista (one-page)',
      'Diseño responsive',
      'Botones de contacto',
      'Estructura visual optimizada',
      'Una ronda de ajustes',
    ],
    featured: false,
  },
  {
    id: 'negocio',
    name: 'Página para negocio',
    price: '$80 – $130',
    description: 'La opción más completa para restaurantes, tiendas y servicios.',
    features: [
      'Hasta 4 secciones',
      'Galería o catálogo visual',
      'Formulario de contacto por correo',
      'Datos, mapa y horarios',
      'Dos rondas de ajustes',
    ],
    featured: true,
    badge: 'Más elegida',
  },
  {
    id: 'completa',
    name: 'Página completa',
    price: '$140 – $200',
    description: 'Una experiencia digital a la altura de tu negocio.',
    features: [
      'Hasta 6 secciones',
      'Catálogo o menú detallado',
      'Animaciones y microinteracciones',
      'Optimización para buscadores',
      'Tres rondas de ajustes',
      'Guía básica de uso',
    ],
    featured: false,
  },
  {
    id: 'rediseno',
    name: 'Rediseño web',
    price: '$40 – $100',
    description: 'Renueva tu sitio actual sin perder lo que ya funciona.',
    features: [
      'Revisión de tu sitio actual',
      'Nueva propuesta visual',
      'Adaptación responsive',
      'Migración de contenido',
      'Dos rondas de ajustes',
    ],
    featured: false,
  },
];

export const processSteps = [
  {
    number: '01',
    icon: 'chat',
    title: 'Conversamos sobre tu negocio',
    description:
      'Me cuentas qué haces, a quién quieres llegar y qué necesitas de tu página. Definimos el alcance y el presupuesto.',
  },
  {
    number: '02',
    icon: 'pen',
    title: 'Diseñamos tu página',
    description:
      'Organizo la estructura, creo la propuesta visual y desarrollo cada sección pensando en tu marca y en tus clientes.',
  },
  {
    number: '03',
    icon: 'sliders',
    title: 'Revisamos y realizamos ajustes',
    description:
      'Revisas el resultado, me das tu feedback y pulimos los detalles para que todo quede como lo imaginas.',
  },
  {
    number: '04',
    icon: 'rocket',
    title: 'Publicamos tu proyecto',
    description:
      'Dejamos tu página en línea y comprobamos que funcione correctamente en celulares, tablets y computadoras.',
  },
];

export const projects = [
  {
    id: 'bit',
    title: 'BIT — Comunidad para gamers',
    category: 'Proyecto en vivo · Plataforma web',
    description:
      'Una plataforma de comunidad para gamers con chat en vivo, salas de voz, grupos, perfiles y notificaciones. Interfaz oscura con acentos neón, cuidada tanto en escritorio como en móvil.',
    tags: ['Aplicación web', 'Tiempo real', 'UI/UX', 'Responsive'],
    link: site.portfolio,
    linkLabel: 'Visitar sitio en vivo',
    image: bitCover,
    imageAlt: 'Vista previa de la plataforma BIT con su interfaz oscura y acentos neón',
    featured: true,
  },
  {
    id: 'casa-oliva',
    title: 'Casa Oliva — Taberna de mercado',
    category: 'Proyecto en vivo · Sitio para restaurante',
    description:
      'Carta digital para una taberna de mercado: doce platos con buscador y filtros, favoritos que se guardan en el navegador, notas por plato y un pedido que se envía por WhatsApp. Un solo archivo HTML, sin frameworks, con diseño editorial inspirado en los mercados españoles.',
    tags: ['HTML, CSS y JS', 'Carta digital', 'Pedidos por WhatsApp', 'Responsive'],
    link: 'https://garciajared798-debug.github.io/casa-oliva/',
    linkLabel: 'Visitar sitio en vivo',
    image: casaOlivaCover,
    imageAlt: 'Collage de platos de Casa Oliva con paella, tacos al pastor, tiramisú y ceviche',
    featured: false,
  },
];

export const interestOptions = [
  {
    group: 'Paquetes',
    options: plans.map((plan) => plan.name),
  },
  {
    group: 'Servicios',
    options: services.map((service) => service.title),
  },
  {
    group: 'Otro',
    options: ['Aún no lo tengo claro'],
  },
];

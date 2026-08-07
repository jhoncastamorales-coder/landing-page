/**
 * Spanish copy. This dictionary is the source of truth for the shape of every
 * translation: `Translation` is inferred from it, so any other locale that is
 * missing a key (or adds one) fails `astro check`.
 */
export const es = {
  meta: {
    // Title ≤ 65 chars and description ≤ 155 so neither gets truncated in the SERP.
    title: 'Software de gestión hotelera para hoteles y hostales | ATRIO/PMS',
    description:
      'PMS en la nube para hoteles boutique y hostales: inventario por habitación y por cama, channel manager, limpieza y facturación. Prueba 30 días sin tarjeta.',
    localeName: 'Español',
    localeShort: 'ES',
    ogImageAlt: 'Logotipo de ATRIO PMS, software de gestión hotelera',
  },

  /**
   * Prose written to be quoted verbatim by answer engines: one self-contained
   * definition, plain facts, no marketing filler that would need context.
   */
  seo: {
    definitionEyebrow: 'Definición',
    definitionTitle: '¿Qué es ATRIO/PMS?',
    definition:
      'ATRIO/PMS es un property management system (PMS) en la nube para hoteles boutique, hostales y aparthoteles. Centraliza reservas, inventario por habitación y por cama, tareas de limpieza, facturación y distribución en canales dentro de una sola plataforma, de modo que la recepción trabaja en una única pantalla en lugar de saltar entre hojas de cálculo y extranets.',
    definitionSecondary:
      'Se diferencia de un PMS hotelero clásico en que gestiona en el mismo flujo unidades completas (habitaciones y suites) y camas individuales de dormitorios compartidos, con tarifas y disponibilidad independientes por tipo de inventario.',
    specTitle: 'Ficha técnica',
    specs: [
      { term: 'Categoría', value: 'Property Management System (PMS) hotelero' },
      { term: 'Modelo', value: 'SaaS en la nube, sin instalación local' },
      { term: 'Dirigido a', value: 'Hoteles boutique, hostales, aparthoteles y cadenas regionales' },
      { term: 'Inventario', value: 'Por habitación y por cama, en el mismo tape chart' },
      { term: 'Integraciones', value: 'Channel managers, pasarelas de pago, cerraduras electrónicas, facturación electrónica' },
      { term: 'Idiomas', value: 'Español e inglés' },
      { term: 'Alojamiento de datos', value: 'Centros de datos en la Unión Europea' },
      { term: 'Prueba gratuita', value: '30 días, sin tarjeta de crédito' },
    ],
  },

  a11y: {
    skipToContent: 'Saltar al contenido',
    toggleTheme: 'Cambiar entre modo claro y oscuro',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    switchLanguage: 'Cambiar idioma',
    mainNavigation: 'Navegación principal',
  },

  nav: {
    platform: 'Plataforma',
    solutions: 'Soluciones',
    pricing: 'Precios',
    faq: 'Preguntas',
    signIn: 'Iniciar sesión',
    getStarted: 'Comenzar',
  },

  hero: {
    eyebrow: 'Property Management System',
    titleLead: 'Gestión hotelera con',
    titleAccent: 'calidez',
    titleTrail: 'y eficiencia.',
    subtitle:
      'Eleva la experiencia de tus huéspedes mientras simplificas las operaciones diarias. ATRIO/PMS es la plataforma diseñada para el profesional de la hospitalidad moderna.',
    ctaPrimary: 'Solicitar demo',
    ctaSecondary: 'Ver la plataforma',
    note: 'Prueba de 30 días · Sin tarjeta de crédito · Migración asistida',
    statLabel: 'Ocupación media',
    statValue: '+24%',
    statCaption: 'primer año con ATRIO',
    today: 'Hoy',
    arrivals: 'Llegadas',
    departures: 'Salidas',
    inHouse: 'En casa',
  },

  trust: {
    label: 'Diseñado para todo tipo de propiedad',
    items: [
      'Hoteles boutique',
      'Hostales',
      'Aparthoteles',
      'Cadenas regionales',
      'Alojamientos rurales',
    ],
  },

  features: {
    eyebrow: 'Plataforma',
    title: 'Todo lo que necesitas, integrado.',
    subtitle:
      'Diseñado para hoteles boutique y cadenas que exigen excelencia visual y operativa.',
    inventory: {
      title: 'Control de inventario',
      body: 'Gestiona habitaciones, tarifas y disponibilidad en tiempo real. Conectividad bidireccional que evita sobreventas antes de que ocurran.',
    },
    operations: {
      title: 'Operaciones fluidas',
      body: 'Automatiza el check-in, la asignación de tareas de limpieza y la facturación. Menos clics, más sonrisas.',
      taskReady: 'Habitación 204 · Lista',
      taskCleaning: 'Habitación 118 · En limpieza',
      taskCheckin: 'Check-in exprés · 3 min',
    },
    reports: {
      title: 'Reportes claros',
      body: 'Toma decisiones informadas con visualizaciones elegantes y exportables. Entiende tu RevPAR de un vistazo.',
    },
    connectivity: {
      title: 'Conexión total',
      body: 'Sincroniza todos tus canales de distribución en tiempo real con un channel manager integrado de alto rendimiento.',
    },
  },

  hybrid: {
    eyebrow: 'Solución híbrida',
    title: 'Para hoteles y hostales, en un solo sistema.',
    body: 'La flexibilidad es nuestra naturaleza. ATRIO/PMS entiende que la hospitalidad moderna no es de talla única: vende una suite de lujo y gestiona camas individuales de un dormitorio compartido dentro del mismo flujo.',
    points: [
      'Gestión a nivel de habitación y a nivel de cama.',
      'Tarifas dinámicas por tipo de inventario y temporada.',
      'Una sola experiencia unificada para recepción.',
      'Tape chart interactivo con arrastrar y soltar.',
    ],
    chartLabel: 'Tape chart · Semana actual',
    roomLabel: 'Habitación',
    bedLabel: 'Cama',
  },

  integrations: {
    eyebrow: 'Ecosistema',
    title: 'Conecta con lo que ya usas.',
    body: 'Integración directa con channel managers, pasarelas de pago y cerraduras electrónicas. Tu stack tecnológico trabajando en armonía, sin exportaciones manuales.',
    items: [
      { title: 'Channel managers', body: 'Sincronización de tarifas y disponibilidad en menos de 60 segundos.' },
      { title: 'Pasarelas de pago', body: 'Cobros, prepagos y depósitos con conciliación automática.' },
      { title: 'Cerraduras electrónicas', body: 'Emisión de llaves digitales al confirmar el check-in.' },
      { title: 'Facturación electrónica', body: 'Documentos fiscales válidos generados desde la reserva.' },
    ],
  },

  stats: {
    title: 'Resultados que se miden.',
    subtitle: 'Promedios reportados por propiedades activas durante su primer año en ATRIO/PMS.',
    items: [
      { value: '+24%', label: 'Ocupación media' },
      { value: '3 min', label: 'Tiempo de check-in' },
      { value: '99,9%', label: 'Disponibilidad del servicio' },
      { value: '40+', label: 'Integraciones nativas' },
    ],
  },

  pricing: {
    eyebrow: 'Precios',
    title: 'Planes que crecen contigo.',
    subtitle: 'Sin costos de instalación. Cambia de plan cuando quieras.',
    perMonth: '/mes',
    perRoomNote: 'por propiedad, facturado mensualmente',
    priceCustom: 'A medida',
    popular: 'Más elegido',
    cta: 'Comenzar ahora',
    ctaContact: 'Hablar con ventas',
    plans: [
      {
        name: 'Esencial',
        description: 'Para propiedades de hasta 20 unidades que arrancan su digitalización.',
        features: [
          'Reservas y tape chart',
          'Check-in y check-out',
          'Housekeeping básico',
          '2 canales de distribución',
          'Soporte por email',
        ],
      },
      {
        name: 'Profesional',
        description: 'Para hoteles y hostales que operan con equipos y varios canales.',
        features: [
          'Todo lo de Esencial',
          'Inventario por habitación y por cama',
          'Channel manager ilimitado',
          'Reportes avanzados y RevPAR',
          'Pasarelas de pago y facturación',
          'Soporte prioritario 24/7',
        ],
      },
      {
        name: 'Enterprise',
        description: 'Para cadenas multipropiedad con requisitos de integración propios.',
        features: [
          'Todo lo de Profesional',
          'Gestión multipropiedad',
          'API y webhooks dedicados',
          'SSO y roles avanzados',
          'Gestor de cuenta asignado',
          'SLA contractual',
        ],
      },
    ],
  },

  testimonial: {
    quote:
      'Migramos tres propiedades en una semana. Recepción dejó de pelearse con hojas de cálculo y hoy cerramos el día contable en minutos, no en horas.',
    author: 'Marina Solís',
    role: 'Directora de Operaciones · Grupo Almadraba',
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: '¿Aún tienes dudas?',
    items: [
      {
        q: '¿Cuánto tarda la migración desde mi sistema actual?',
        a: 'La mayoría de propiedades queda operativa en menos de una semana. Importamos reservas futuras, fichas de huésped y tarifas desde tu sistema anterior, y acompañamos el primer cierre contable en vivo.',
      },
      {
        q: '¿Puedo gestionar habitaciones privadas y camas compartidas a la vez?',
        a: 'Sí. Ese es el núcleo de ATRIO/PMS: el mismo tape chart muestra unidades completas y camas individuales, con tarifas y disponibilidad independientes pero un único flujo de reserva.',
      },
      {
        q: '¿Con qué channel managers se integra?',
        a: 'Conectamos con los principales channel managers del mercado y publicamos una API abierta con webhooks, de modo que cualquier canal propio pueda sincronizarse en tiempo real.',
      },
      {
        q: '¿Los datos de mis huéspedes están seguros?',
        a: 'Los datos se cifran en tránsito y en reposo, se alojan en centros de datos europeos y el acceso se controla por roles con registro de auditoría completo.',
      },
      {
        q: '¿Hay permanencia mínima?',
        a: 'No. Los planes son mensuales y puedes cancelar o cambiar de nivel cuando quieras. Al cancelar, exportas todos tus datos en formatos estándar.',
      },
    ],
  },

  cta: {
    title: 'Lleva tu propiedad al siguiente nivel.',
    body: 'Únete a cientos de propiedades que ya operan con más tranquilidad y mejores márgenes.',
    primary: 'Comenzar prueba gratuita',
    secondary: 'Agendar demo',
  },

  footer: {
    tagline: 'El Property Management System para la hospitalidad moderna.',
    rights: '© {year} ATRIO Property Management Systems. Todos los derechos reservados.',
    columns: [
      {
        title: 'Producto',
        links: ['Plataforma', 'Integraciones', 'Precios', 'Novedades'],
      },
      {
        title: 'Compañía',
        links: ['Sobre nosotros', 'Clientes', 'Empleo', 'Contacto'],
      },
      {
        title: 'Legal',
        links: ['Privacidad', 'Términos', 'Cookies', 'Seguridad'],
      },
    ],
  },
};

/** Structural shape every locale must satisfy. */
export type Translation = typeof es;

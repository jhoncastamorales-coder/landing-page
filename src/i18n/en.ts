import type { Translation } from './es';

export const en: Translation = {
  meta: {
    title: 'Hotel and hostel management software (PMS) | ATRIO/PMS',
    description:
      'Cloud PMS for boutique hotels and hostels: room-level and bed-level inventory, channel manager, housekeeping, and invoicing. 30-day trial, no card required.',
    localeName: 'English',
    localeShort: 'EN',
    ogImageAlt: 'ATRIO PMS logo, hotel management software',
  },

  seo: {
    definitionEyebrow: 'Definition',
    definitionTitle: 'What is ATRIO/PMS?',
    definition:
      'ATRIO/PMS is a cloud property management system (PMS) for boutique hotels, hostels, and aparthotels. It brings bookings, room-level and bed-level inventory, housekeeping tasks, invoicing, and channel distribution together on one platform, so the front desk works from a single screen instead of jumping between spreadsheets and extranets.',
    definitionSecondary:
      'It differs from a classic hotel PMS in that it handles whole units (rooms and suites) and individual beds in shared dorms within the same flow, with independent rates and availability per inventory type.',
    specTitle: 'At a glance',
    specs: [
      { term: 'Category', value: 'Hotel property management system (PMS)' },
      { term: 'Model', value: 'Cloud SaaS, no local installation' },
      { term: 'Built for', value: 'Boutique hotels, hostels, aparthotels, and regional chains' },
      { term: 'Inventory', value: 'Room-level and bed-level, in the same tape chart' },
      { term: 'Integrations', value: 'Channel managers, payment gateways, electronic locks, e-invoicing' },
      { term: 'Languages', value: 'Spanish and English' },
      { term: 'Data hosting', value: 'European Union data centres' },
      { term: 'Free trial', value: '30 days, no credit card' },
    ],
  },

  a11y: {
    skipToContent: 'Skip to content',
    toggleTheme: 'Toggle light and dark mode',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLanguage: 'Switch language',
    mainNavigation: 'Main navigation',
  },

  nav: {
    platform: 'Platform',
    solutions: 'Solutions',
    pricing: 'Pricing',
    faq: 'FAQ',
    signIn: 'Sign in',
    getStarted: 'Get started',
  },

  hero: {
    eyebrow: 'Property Management System',
    titleLead: 'Hotel management with',
    titleAccent: 'warmth',
    titleTrail: 'and efficiency.',
    subtitle:
      'Raise the bar on the guest experience while simplifying daily operations. ATRIO/PMS is the platform built for the modern hospitality professional.',
    ctaPrimary: 'Request a demo',
    ctaSecondary: 'See the platform',
    note: '30-day trial · No credit card · Guided migration',
    statLabel: 'Average occupancy',
    statValue: '+24%',
    statCaption: 'first year on ATRIO',
    today: 'Today',
    arrivals: 'Arrivals',
    departures: 'Departures',
    inHouse: 'In house',
  },

  trust: {
    label: 'Built for every kind of property',
    items: [
      'Boutique hotels',
      'Hostels',
      'Aparthotels',
      'Regional chains',
      'Rural stays',
    ],
  },

  features: {
    eyebrow: 'Platform',
    title: 'Everything you need, in one place.',
    subtitle:
      'Designed for boutique hotels and chains that demand visual and operational excellence.',
    inventory: {
      title: 'Inventory control',
      body: 'Manage rooms, rates, and availability in real time. Two-way connectivity that stops overbookings before they happen.',
    },
    operations: {
      title: 'Seamless operations',
      body: 'Automate check-in, housekeeping assignments, and invoicing. Fewer clicks, more smiles.',
      taskReady: 'Room 204 · Ready',
      taskCleaning: 'Room 118 · Cleaning',
      taskCheckin: 'Express check-in · 3 min',
    },
    reports: {
      title: 'Clear reporting',
      body: 'Make informed decisions with elegant, exportable visualizations. Read your RevPAR at a glance.',
    },
    connectivity: {
      title: 'Total connectivity',
      body: 'Sync every distribution channel in real time with a high-performance built-in channel manager.',
    },
  },

  hybrid: {
    eyebrow: 'Hybrid solution',
    title: 'Hotels and hostels, on one system.',
    body: 'Flexibility is in our nature. ATRIO/PMS knows modern hospitality is not one-size-fits-all: sell a luxury suite and manage individual beds in a shared dorm within the very same flow.',
    points: [
      'Room-level and bed-level management.',
      'Dynamic rates per inventory type and season.',
      'One unified experience for the front desk.',
      'Interactive drag-and-drop tape chart.',
    ],
    chartLabel: 'Tape chart · Current week',
    roomLabel: 'Room',
    bedLabel: 'Bed',
  },

  integrations: {
    eyebrow: 'Ecosystem',
    title: 'Connect what you already use.',
    body: 'Direct integration with channel managers, payment gateways, and electronic locks. Your tech stack working in harmony, with no manual exports.',
    items: [
      { title: 'Channel managers', body: 'Rate and availability sync in under 60 seconds.' },
      { title: 'Payment gateways', body: 'Charges, prepayments, and deposits with automatic reconciliation.' },
      { title: 'Electronic locks', body: 'Digital keys issued the moment check-in is confirmed.' },
      { title: 'E-invoicing', body: 'Valid tax documents generated straight from the booking.' },
    ],
  },

  stats: {
    title: 'Results you can measure.',
    subtitle: 'Averages reported by active properties during their first year on ATRIO/PMS.',
    items: [
      { value: '+24%', label: 'Average occupancy' },
      { value: '3 min', label: 'Check-in time' },
      { value: '99.9%', label: 'Service uptime' },
      { value: '40+', label: 'Native integrations' },
    ],
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'Plans that grow with you.',
    subtitle: 'No setup fees. Change plan whenever you like.',
    perMonth: '/month',
    perRoomNote: 'per property, billed monthly',
    priceCustom: 'Custom',
    popular: 'Most popular',
    cta: 'Get started',
    ctaContact: 'Talk to sales',
    plans: [
      {
        name: 'Essential',
        description: 'For properties up to 20 units taking their first digital step.',
        features: [
          'Bookings and tape chart',
          'Check-in and check-out',
          'Basic housekeeping',
          '2 distribution channels',
          'Email support',
        ],
      },
      {
        name: 'Professional',
        description: 'For hotels and hostels running teams across several channels.',
        features: [
          'Everything in Essential',
          'Room-level and bed-level inventory',
          'Unlimited channel manager',
          'Advanced reporting and RevPAR',
          'Payment gateways and invoicing',
          'Priority 24/7 support',
        ],
      },
      {
        name: 'Enterprise',
        description: 'For multi-property groups with their own integration requirements.',
        features: [
          'Everything in Professional',
          'Multi-property management',
          'Dedicated API and webhooks',
          'SSO and advanced roles',
          'Assigned account manager',
          'Contractual SLA',
        ],
      },
    ],
  },

  testimonial: {
    quote:
      'We migrated three properties in a week. The front desk stopped fighting spreadsheets, and we now close the accounting day in minutes instead of hours.',
    author: 'Marina Solís',
    role: 'Director of Operations · Grupo Almadraba',
  },

  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Still wondering?',
    items: [
      {
        q: 'How long does migrating from my current system take?',
        a: 'Most properties are live in under a week. We import future bookings, guest profiles, and rates from your previous system, and we sit with you through the first accounting close.',
      },
      {
        q: 'Can I manage private rooms and shared beds at the same time?',
        a: 'Yes. That is the heart of ATRIO/PMS: the same tape chart shows whole units and individual beds, with independent rates and availability but a single booking flow.',
      },
      {
        q: 'Which channel managers do you integrate with?',
        a: 'We connect with the major channel managers on the market and publish an open API with webhooks, so any in-house channel can sync in real time.',
      },
      {
        q: 'Is my guest data secure?',
        a: 'Data is encrypted in transit and at rest, hosted in European data centres, and access is role-based with a complete audit trail.',
      },
      {
        q: 'Is there a minimum commitment?',
        a: 'No. Plans are monthly and you can cancel or change tier whenever you want. On cancellation you export all your data in standard formats.',
      },
    ],
  },

  cta: {
    title: 'Take your property to the next level.',
    body: 'Join hundreds of properties already running with more calm and better margins.',
    primary: 'Start free trial',
    secondary: 'Book a demo',
  },

  footer: {
    tagline: 'The Property Management System for modern hospitality.',
    rights: '© {year} ATRIO Property Management Systems. All rights reserved.',
    columns: [
      {
        title: 'Product',
        links: ['Platform', 'Integrations', 'Pricing', 'Changelog'],
      },
      {
        title: 'Company',
        links: ['About us', 'Customers', 'Careers', 'Contact'],
      },
      {
        title: 'Legal',
        links: ['Privacy', 'Terms', 'Cookies', 'Security'],
      },
    ],
  },
};

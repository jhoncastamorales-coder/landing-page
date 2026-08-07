/**
 * Icon path data. Stroke weight 1.75 with round caps, matching the
 * "1.5–2pt stroke, rounded caps" rule in the design system. Kept as raw path
 * markup so `Icon.astro` can inline it — no icon font, no network request, and
 * every glyph inherits `currentColor` so it themes for free.
 */
export const iconPaths = {
  inventory:
    '<path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5Z"/><path d="m3 7.5 9 4.5 9-4.5"/><path d="M12 12v9"/>',
  operations:
    '<path d="M21 12a9 9 0 0 1-9 9 9 9 0 0 1-7.9-4.7"/><path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 7.9 4.7"/><path d="M20 3v5h-5"/><path d="M4 21v-5h5"/>',
  reports: '<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/>',
  network:
    '<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5v4.25a2 2 0 0 1-.7 1.5L7 17"/><path d="M12 7.5v4.25a2 2 0 0 0 .7 1.5L17 17"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12.2 2.4 2.4 4.6-5"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="M10.2 9.3 15 12l-4.8 2.7Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  globe:
    '<circle cx="12" cy="12" r="9"/><path d="M3.5 9h17M3.5 15h17"/><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/>',
  'arrow-right': '<path d="M4 12h15"/><path d="m13 6 6 6-6 6"/>',
  plug: '<path d="M9 3v6M15 3v6"/><path d="M6 9h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6Z"/><path d="M12 18v3"/>',
  card: '<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19"/><path d="M6.5 15h3"/>',
  key: '<circle cx="8" cy="12" r="3.5"/><path d="M11.5 12H21"/><path d="M17.5 12v3"/><path d="M20 12v2"/>',
  invoice: '<path d="M6 3h9l3.5 3.5V21H6Z"/><path d="M14.5 3v4H19"/><path d="M9 12h6M9 16h4"/>',
  'chevron-down': '<path d="m6 9.5 6 6 6-6"/>',
  quote:
    '<path d="M9.5 6C7 7.4 5.5 9.8 5.5 13v5h5.5v-6.5H8.6c.2-1.6 1-2.9 2.4-3.7Z"/><path d="M18 6c-2.5 1.4-4 3.8-4 7v5h5.5v-6.5h-2.4c.2-1.6 1-2.9 2.4-3.7Z"/>',
  sparkle: '<path d="M12 3.5 13.9 9l5.6 2-5.6 2-1.9 5.5L10.1 13 4.5 11l5.6-2Z"/>',
  shield: '<path d="M12 3 5 6v5.5c0 4.2 2.9 7.6 7 9.5 4.1-1.9 7-5.3 7-9.5V6Z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
} as const;

export type IconName = keyof typeof iconPaths;

/**
 * Renders the social share card and the PWA/touch icons.
 *
 *   node scripts/make-og.mjs
 *
 * og:image must be a raster: Facebook, X, LinkedIn, WhatsApp and Slack all
 * ignore SVG, so an SVG card silently shows no preview at all. Output is a
 * 1200x630 PNG, the size every one of them crops to.
 *
 * Run after scripts/trace-logo.mjs, which produces the logo path this reads.
 */
import { writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { logoPaths } from '../src/generated/logo-paths.ts';

const here = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(here, '../public');

const NAVY = '#0f2350';
const NAVY_DEEP = '#0a1128';
const ACCENT = '#4d8dff';

const OG = { width: 1200, height: 630 };

const { full, mark } = logoPaths;

/** Scales a traced path to a target width and centres it at (x, y-top). */
function place(path, targetWidth, x, y) {
  const scale = targetWidth / path.width;
  return {
    transform: `translate(${x} ${y}) scale(${scale})`,
    height: path.height * scale,
  };
}

const logo = place(full, 620, (OG.width - 620) / 2, 200);

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${OG.width}" height="${OG.height}" viewBox="0 0 ${OG.width} ${OG.height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${NAVY}"/>
      <stop offset="100%" stop-color="${NAVY_DEEP}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.32" r="0.6">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.34"/>
      <stop offset="100%" stop-color="${ACCENT}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${OG.width}" height="${OG.height}" fill="url(#bg)"/>
  <rect width="${OG.width}" height="${OG.height}" fill="url(#glow)"/>
  <rect x="0" y="${OG.height - 10}" width="${OG.width}" height="10" fill="${ACCENT}"/>
  <g transform="${logo.transform}">
    <path fill="#ffffff" fill-rule="evenodd" d="${full.d}"/>
  </g>
  <text x="${OG.width / 2}" y="${logo.height + 270}" text-anchor="middle"
        font-family="Hanken Grotesk, Segoe UI, Helvetica, Arial, sans-serif"
        font-size="34" font-weight="600" fill="#c9d8f5" letter-spacing="0.5">
    Property Management System · Hoteles y hostales
  </text>
</svg>`;

await sharp(Buffer.from(ogSvg)).png({ compressionLevel: 9 }).toFile(resolve(publicDir, 'og-image.png'));

/** Square app icon: the monogram reversed out of the brand navy. */
function iconSvg(size) {
  const scale = (size * 0.6) / mark.width;
  const w = mark.width * scale;
  const h = mark.height * scale;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.22)}" fill="#1a3668"/>
  <g transform="translate(${(size - w) / 2} ${(size - h) / 2}) scale(${scale})">
    <path fill="#ffffff" fill-rule="evenodd" d="${mark.d}"/>
  </g>
</svg>`;
}

for (const [name, size] of [
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
]) {
  await sharp(Buffer.from(iconSvg(size))).png({ compressionLevel: 9 }).toFile(resolve(publicDir, name));
}

await writeFile(
  resolve(publicDir, 'site.webmanifest'),
  `${JSON.stringify(
    {
      name: 'ATRIO PMS',
      short_name: 'ATRIO',
      description: 'Property management system para hoteles boutique y hostales.',
      start_url: '/',
      display: 'standalone',
      background_color: '#0a1128',
      theme_color: '#1a3668',
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      ],
    },
    null,
    2,
  )}\n`,
);

console.log('wrote og-image.png, apple-touch-icon.png, icon-192.png, icon-512.png, site.webmanifest');

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.gfcbsg.com',
  trailingSlash: 'always',
  // Inline the small stylesheet into each page so nothing blocks first paint.
  build: { format: 'directory', inlineStylesheets: 'always' },
  // Serve photos at the size each screen needs, so full-size phone photos
  // added to posts don't slow the site down.
  image: { layout: 'constrained', breakpoints: [640, 960, 1280, 1920] },
  integrations: [sitemap()],
});

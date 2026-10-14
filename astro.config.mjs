// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.gfcbsg.com',
  trailingSlash: 'always',
  // Inline the small stylesheet into each page so nothing blocks first paint.
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [sitemap()],
});

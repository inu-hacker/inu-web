import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  // used to generate images
  site: 'https://www.inu-hacker.com',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
});

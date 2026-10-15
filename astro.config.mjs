import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://vkoori.github.io',
  base: '/AI-Daily-Resource',
  trailingSlash: 'always',
  integrations: [mdx()],
  build: {
    format: 'directory',
  },
});

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vkoori.github.io',
  base: '/AI-Daily-Resource',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});

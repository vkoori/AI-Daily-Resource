import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vkoori.github.io',
  base: '/ai-daily-resource',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});

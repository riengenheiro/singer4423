import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://singer4423.escolhacertabrasil.com.br',
  output: 'static',
  compressHTML: true,
  build: {
    assets: '_assets',
  },
});

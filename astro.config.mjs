import { defineConfig } from 'astro/config';

// Cloudflare Pages serves this site from the domain root.
export default defineConfig({
  base: '/',
  trailingSlash: 'always'
});

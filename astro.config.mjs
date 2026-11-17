import { defineConfig } from 'astro/config';

// GitHub Pages serves this project from a repository subpath.
// Cloudflare Pages and local development serve it from the domain root.
const base = process.env.GITHUB_ACTIONS && !process.env.CF_PAGES
  ? '/Volvo-s60-reference'
  : '/';

export default defineConfig({
  base,
  trailingSlash: 'always'
});

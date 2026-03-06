# Jose Miguel Navarro Portfolio

Personal portfolio website built with [Astro](https://astro.build/) and deployed to GitHub Pages.

## Stack

- Astro 5
- TypeScript
- pnpm
- `astro-icon` + Iconify sets

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:4321`.

## Scripts

- `pnpm dev`: run local dev server
- `pnpm build`: run type/content checks and build static site
- `pnpm preview`: preview the production build locally

## SEO and metadata

The site includes:

- Canonical URL
- Open Graph + Twitter meta tags
- JSON-LD `Person` schema
- `robots.txt`
- `sitemap.xml` and `sitemap-index.xml`
- Custom social preview image: `public/og-image.svg`

Main metadata lives in:

- `src/layouts/Layout.astro`
- `src/pages/index.astro`

## Project structure

```text
src/
  components/
    sections/
  layouts/
  pages/
public/
  images/
  og-image.svg
  robots.txt
  sitemap.xml
```

## Deployment

Deployment is handled by GitHub Actions:

- Workflow file: `.github/workflows/deploy.yml`
- Build output directory: `dist/`
- Deploy target: GitHub Pages

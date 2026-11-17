# Volvo S60 Reference

An unofficial, owner-focused reference for the **2021 Volvo S60 T5 Inscription**.

The site is designed as a straightforward vehicle reference: plain typography, hierarchical navigation, concise articles, and practical maintenance and repair notes.

## Sections

- Introduction and vehicle identification
- Exterior and paint
- Interior and controls
- Infotainment
- Driving
- Maintenance and service records
- Repairs and DIY
- Troubleshooting
- Technical reference
- Resources

## Local development

Requirements: Node.js 22 or newer.

```sh
npm install
npm run dev
```

Build the static site:

```sh
npm run build
npm run preview
```

## Deployment

### Cloudflare Pages

1. In the Cloudflare dashboard, open **Workers & Pages → Create → Pages → Connect to Git**.
2. Select `willbed34/Volvo-s60-reference` and the `main` branch.
3. Set the build configuration:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (the default)
4. Save and deploy.

Cloudflare automatically rebuilds and deploys after each push to `main`. There is no separate deploy command when using Git integration. To trigger a deployment manually, open the project in Cloudflare Pages and use **Create deployment**.

### GitHub Pages

The GitHub Actions workflow also builds and deploys the site to GitHub Pages whenever changes are pushed to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

## Accuracy and safety

This project focuses on one 2021 S60 T5 Inscription, but equipment and specifications can vary by market, build date, drivetrain, and options. Confirm vehicle-specific service procedures, torque values, fluid specifications, fuse assignments, and part numbers against official Volvo documentation and the vehicle's VIN.

This is an independent owner-maintained reference. It is not affiliated with or endorsed by Volvo Cars, and it is not a substitute for the owner's manual or professional service information.

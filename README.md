# Volvo S60 Reference

An independent, owner-focused reference for the **2021 model-year, third-generation Volvo S60 range**, primarily using North American specifications. It covers T5, T6, T8 Recharge and Polestar Engineered variants, with market, trim, drivetrain and equipment differences called out where they matter.

The site is organized as a vehicle reference rather than a single-car repair log: browse by system, use the visual parts atlas to jump to component topics, or search the reference library. Some owner-specific examples relate to a T5 Inscription AWD, but that is not the assumed configuration for every page.

## Sections

- Introduction and model specifications
- Exterior, body and paint
- Interior, seats, controls and infotainment
- Driving and vehicle operation
- Maintenance, fluids, tires and service records
- Repairs and DIY reference guides
- Troubleshooting and warning messages
- Technical systems: engine, AWD, cooling, suspension, steering and electrical
- Engine-compartment overview and visual parts atlas
- Manuals, sources and accuracy notes

## Local development

Requirements: Node.js 22 or newer.

```sh
npm install
npm run dev
```

Build the site, generate the Pagefind search index, and validate internal links:

```sh
npm run build
npm run preview
```

GitHub Actions runs this validation on pushes to `main` and pull requests. A green workflow confirms the static site build, search index, and internal-link check; it does not by itself confirm that Cloudflare has deployed the latest commit.

## Deployment — Cloudflare Workers

This repository is configured as a **Cloudflare Worker with static assets**, not a Cloudflare Pages project. The Wrangler configuration serves the built `dist/` directory.

For a manual deployment from a computer with Node.js and Cloudflare authentication configured:

```sh
npm install
npm run build
npx wrangler deploy
```

If the Cloudflare dashboard's Git integration is connected to this repository, pushes to the configured production branch (`main`) should trigger deployment. Confirm the deployed commit under **Workers & Pages → your project → Deployments**. If no new deployment appears, check the Git connection and deployment settings; a successful GitHub build alone does not prove the site is live.

Do not create a separate Cloudflare Pages project for this repository unless the deployment architecture is intentionally changed.

## Accuracy and safety

- This reference describes the 2021 model-year S60 range, primarily North American specifications.
- Engine, drivetrain, brakes, suspension, electrical systems, trim, packages and market availability can differ.
- Official Volvo owner information is preferred for operating guidance. VIN-specific Volvo technical information is required for repair procedures, wiring, torque values, fuse assignments, fluid capacities and part numbers.
- Images are labeled as Volvo illustrations, licensed reference photographs, or generic component examples. Generic images do not establish S60 fitment or component location.
- T8 Recharge includes high-voltage systems. High-voltage service is for appropriately trained technicians.

Always confirm the vehicle's VIN-linked build information and the applicable official procedure before ordering parts or performing repairs. Keep the full VIN and other identifying vehicle details out of this public repository.

This is an independent owner-maintained reference. It is not affiliated with or endorsed by Volvo Cars, and it is not a substitute for the owner's manual, factory workshop information, professional diagnosis, or safe repair practices.

# Volvo S60 Reference — Sprint Plan

## Project goal

Build a compact, documentation-first reference for a North American-market 2021 Volvo S60 T5 Inscription AWD. The site is an independent owner-maintained reference, not a replacement for VIN-specific Volvo service information.

## Sprint status

| Sprint | Scope | Status |
|---|---|---|
| 1 | Astro project scaffold, static deployment foundation, base layout | Complete |
| 2 | Core vehicle overview, exterior, interior, infotainment, and driving pages | Complete |
| 3 | Maintenance schedule, fluids, tires, and maintenance log | Complete |
| 4 | Troubleshooting, warning symbols, electrical checks, fuses, and diagnostics | Complete |
| 5 | Parts/consumables reference and owner log improvements | Complete |
| 6 | AWD and brake diagrams plus diagrams index | Complete |
| 7 | Pagefind full-text search, mobile navigation, previous/next links, and site index | Implemented; production verification pending |
| 8 | Deeper maintenance, oil-level, AWD warning, and diagnostic guidance | Complete |
| 9 | Additional visual references for oil-level checks and diagnostic workflow | Complete |
| 10 | Source hierarchy, model-year audit, internal-link validation, and Cloudflare build alignment | Implemented; final CI run pending |

## Completed content additions

- Owner maintenance checks and electronic oil-level checking guide.
- Expanded 10k–150k-mile service milestones from Volvo Car USA's 2020/2021 maintenance operations document.
- AWD warning evidence-capture and diagnostic guidance.
- Visual diagnostic workflow.
- Source notes explaining the authority and limits of each reference.
- Corrected the Cloudflare root-path configuration and removed the obsolete GitHub Pages deployment step from the validation workflow.
- Added a post-build internal-link checker.

## Accuracy rules

- Confirm fitment using the vehicle's VIN/build data and physical labels.
- Do not infer transmission fluid, brake package, tire fitment, fuse assignments, or torque values from the trim badge alone.
- Prefer model-year Volvo owner's information and Volvo technical service data.
- Keep unverified values explicitly marked as unconfirmed.
- Do not publish the full VIN or other identifying vehicle information.

## Remaining operational verification

- Confirm the latest GitHub Actions build completes successfully, including Pagefind generation and the internal-link checker.
- Confirm the resulting Cloudflare deployment serves the root-path site and that search works on desktop and mobile.
- Confirm the live search index contains the newly added pages.

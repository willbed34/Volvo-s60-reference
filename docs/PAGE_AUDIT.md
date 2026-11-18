# Site-wide page and image audit

Audit baseline: `main`, November 2026. This is an independent owner reference for the North American 2021-model-year, third-generation (SPA) S60 range. It is not a Volvo workshop manual.

## Audit scope

- Reviewed the repository's full recursive file tree and all 42 Astro page routes, plus the shared layout, navigation, photo component, stylesheet and build/link-check workflow.
- Checked route/page structure, page length and headings, image coverage, source-link coverage, obvious placeholder text, and the distinction between overview material and VIN-specific repair instructions.
- Reworked the maintenance schedule and several thin introduction pages.
- Added Volvo 2021 owner-information illustrations to relevant technical and maintenance pages, and added further S60 exterior/interior reference imagery.
- The repository currently uses externally hosted image URLs; it does not contain a locally managed image library. Image availability therefore depends on the source host. Volvo illustrations are linked back to their source and labeled as Volvo material; Commons photos retain creator and license credit.

## Page-by-page findings

| Route | Audit finding / current state |
|---|---|
| `/` | Home page has a clear model-year scope, three images and links into the main reference sections. |
| `/introduction/` | Expanded to explain coverage, drivetrain distinctions and where to start. |
| `/introduction/about/` | Expanded with scope, source hierarchy, image labels and safety limits. |
| `/introduction/specifications/` | Contains T5/T6/T8 range, trim and configuration notes, plus a real 2021 T8 R-Design Plus exterior photo. Confirm every output and market-specific combination against a North American MY2021 brochure/build record before treating as universal. |
| `/exterior/` | Has a representative third-generation exterior photo and navigation. |
| `/exterior/body/` | Added a rear three-quarter S60 photo. Paint-code identification and damage-assessment guidance are present; exact paint code remains vehicle-label dependent. |
| `/interior/` | Has a real 2020 third-generation S60 T8 cockpit photo and topic links; the photo is right-hand-drive, and equipment shown is trim-specific. |
| `/interior/seats-controls/` | Added Volvo centre-display views illustration. Physical seat/control photos and option-by-option feature matrix remain opportunities for expansion. |
| `/infotainment/` | Has a Volvo Sensus-era cockpit image and overview. More model-year-specific screen/menu illustrations would improve it. |
| `/driving/` | Useful orientation page; not a substitute for the full owner's manual. Keep it concise and link each safety-critical operation to Volvo instructions. |
| `/maintenance/` | Maintenance hub has all major topic links, powertrain caveats and 2026 budget estimates. |
| `/maintenance/service-schedule/` | Redesigned with 10k–150k timeline, time-based intervals, planner, checklist and 2026 estimates. Verify exact application against the vehicle's VIN-linked schedule; do not treat inspection milestones as automatic part replacements. |
| `/maintenance/fluids/` | Engine-code oil table, Volvo engine-bay service-point illustration and fluid-family cautions are present. Transmission/coolant quantities and T8-specific fluid details are deliberately not guessed. |
| `/maintenance/oil-level/` | Added Volvo 2021 engine-bay illustration and retained the electronic oil-level workflow. |
| `/maintenance/tires-wheels/` | Added a schematic TPMS warning symbol and a source link for Volvo's 2021 pressure-reference procedure. Actual pressure must come from the car's placard. |
| `/maintenance/owner-checks/` | Practical between-service checklist with stop conditions and cost context. |
| `/maintenance/log/` | Printable service-record template; entries are intentionally not stored by the website. |
| `/parts/` | Visual parts atlas covers exterior, engine bay, cabin and brake/chassis areas. Marker positions are navigational, not OEM callouts. |
| `/repairs/` | Repair hub distinguishes overview guides from full workshop procedures and includes 2026 cost ranges. |
| `/repairs/brake-assembly/` | Generic disc-brake photo plus original schematic. Clearly labeled as educational, not a Volvo exploded-parts drawing. |
| `/repairs/front-brake-pads/` | Detailed planning and inspection workflow. It is not a complete factory procedure: exact pad fitment, torque, special tools and service steps must come from VIN-specific Volvo service data. |
| `/repairs/paint-scratches/` | Practical assessment and repair-selection guide with a conceptual paint-layer damage diagram and 2026 budgeting allowances. A future improvement is a labeled, non-identifying close-up photo series showing clear-coat, primer and bare-metal damage. |
| `/resources/` | Official owner-information and service-source links; maintenance PDF scope corrected to identify ICE and PHEV coverage. |
| `/resources/source-notes/` | Expanded source hierarchy and explicit note that the supplied 2018 S60 page is an earlier-generation visual reference only, not 2021 component-location data. |
| `/site-index/` | Generated navigation index; deliberately text-only. |
| `/technical/` | Technical hub links to system, diagram and diagnostic pages. |
| `/technical/engine-and-drivetrain/` | T5/T6/T8 comparison, Volvo 2021 engine-bay illustration and conceptual powertrain diagram. Output and engine-code application should be checked against the vehicle build record. |
| `/technical/engine-compartment/` | Uses the actual 2021 S60 Volvo engine-compartment illustration, not the 2018 predecessor's image. Includes six callout descriptions and Volvo safety warnings. |
| `/technical/fuses/` | Added the actual 2021 S60 fuse-panel illustration and transcribed the populated engine-compartment, under-glovebox and cargo fuse positions from Volvo's Canadian 2021 owner-information tables, with diesel/optional/mild-hybrid caveats. The vehicle's own fuse-cover chart still takes priority. |
| `/technical/parts/` | Parts-identification worksheet with VIN, drivetrain, brake and fluid cautions. Not a live EPC catalogue. |
| `/technical/awd-system/` | Conceptual diagram separates mechanical T5/T6 AWD from T8 electric rear drive. Not a parts/service diagram. |
| `/technical/battery-electrical/` | Added Volvo support-battery illustration and high-voltage safety boundary. The image is specifically a support-battery reference, not a universal starter/traction battery location. |
| `/technical/cooling-system/` | Volvo engine-bay illustration, powertrain distinctions and hot-system safety guidance. No unverified fill/bleed procedure. |
| `/technical/suspension-steering/` | Conceptual axle inspection map and configuration caveats. No VIN-specific alignment or torque values. |
| `/technical/diagrams/` | Diagram index that clearly separates conceptual drawings from factory illustrations. |
| `/technical/diagnostics/` | OBD-II versus Volvo-capable scanning guidance and evidence-preservation workflow. |
| `/technical/diagnostic-codes/` | Code-family and record template; deliberately avoids code-to-part guesses. |
| `/troubleshooting/` | Symptom/evidence hub with safety-first framing. |
| `/troubleshooting/diagnostic-workflow/` | Original flow diagram and repeatable evidence-first process. |
| `/troubleshooting/electrical/` | Safe first checks for starting/electrical symptoms; module-level testing remains technician work. |
| `/troubleshooting/awd-warning/` | Evidence-gathering guide; does not infer failed AWD parts from a warning alone. |
| `/troubleshooting/warning-symbols/` | Red/amber response table; exact driver-display text and MY2021 owner's manual take precedence. |

## Image and source corrections made in this pass

1. The user-supplied 2018 Volvo support page shows an earlier-generation S60 engine bay. It was useful as a visual-design example, but its callouts are not the 2021 SPA engine layout. The site now explicitly says so in Source Notes.
2. The 2021 engine-compartment page uses Volvo's own 2021 S60 illustration, which identifies coolant expansion tank, brake-fluid reservoir, washer-fluid filler, central electrical unit, air filter and oil filler. Volvo warns that the actual layout can vary by engine/variant.
3. The fuse page now includes the 2021 engine-compartment fuse layout. Fuse assignments are not treated as universal.
4. Oil-level, battery-electrical and tire pages now include relevant Volvo owner-information illustrations.
5. Body and seats/controls pages gained additional S60/Volvo reference imagery with source and license captions.

## Remaining high-value work

- Build a VIN/market-aware applicability matrix for T5 FWD, T5 AWD, T6 AWD, T8 Recharge and Polestar Engineered, using official North American MY2021 material.
- Obtain the complete correct MY2021 fuse chart/supplement and transcribe only with the market/equipment caveats intact.
- Add more real S60 photos to thin pages, especially underbody/suspension, actual brake hardware, paint damage examples and cabin controls. Prefer Volvo owner illustrations or properly licensed Commons images; label generic examples clearly.
- Add page-specific Volvo source links to any remaining factual statements that currently rely on general description.
- Expand troubleshooting into symptom-specific guides only when the diagnostic path can be grounded in Volvo service information.
- Keep all exact torque values, fuse assignments, fluid quantities, part numbers and repair steps out of the reference unless confirmed against the exact VIN/engine/transmission/brake package.

## Validation

The GitHub Actions workflow runs `npm install` and `npm run build`; the build generates the static site/search index and runs the internal-link checker. A green GitHub run does not establish that Cloudflare has deployed the same commit. Confirm the latest commit under Cloudflare Workers & Pages → Deployments.

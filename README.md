# Alexander Makmak / QA Portfolio

Buildless portfolio for manual Web/API QA, compatible with existing GitHub Pages and its /qa-portfolio/ base path. No external trackers or CDN dependencies.

## Local preview

Run python -m http.server 5193 --bind 127.0.0.1 from this directory. Open http://127.0.0.1:5193. Plain HTML also opens locally: all scripts use classic script tags.

## Editing

- index.html: introduction, experience, contacts and structure.
- content/portfolio.js: projects, personal contributions and artifact links.
- content/cases.js: generated TestRail data; duplicate Steps headers are preserved.
- assets/style.css: responsive design.
- assets/app.js: dialogs, search and priority filter.
- assets/docs/: public-safe resume and approved test exports.
- assets/portrait.webp: optimized supplied portrait, without aesthetic changes.
- assets/lucide.min.js: Lucide icons, ISC license in assets/LUCIDE-LICENSE.
- scripts/prepare_assets.py --source PATH: regenerate portrait and approved exports. It never copies original PDFs.
- content/resume.json: public resume content.
- scripts/create_public_resume.py: generate the public resume with ReportLab and Arial (Windows fonts).

## Publication review

Website: https://alex-makmak.github.io/qa-portfolio/

- Resume updated 13 October 2026 is the experience source. Team internship and educational projects are separated.
- Skyrexio statistics are attributed to its recommendation: 500+ test cases AND checklists, 60+ defects.
- Public resume excludes birth date, telephone and salary. Original PDFs and recommendation are not published and remain in ignored private-source/.
- Telegram: AlexMakmak, confirmed by the owner on 13 October 2026.
- External links inherited from old site may require login. Public availability is not asserted.
- Source test cases have blank Expected Result fields. Viewer does not invent results or execution statuses.
- No private OmniNotice team documents are included.

Future publication: review new artifacts for private data, then use a normal Git commit and pull request. Keep private-source/, output/ and test-results/ out of Git.

## Verification

scripts/check.cjs uses Playwright (available in the bundled workspace runtime). Set CHROME_PATH to an installed Chromium executable if Playwright's default browser is absent. Run node scripts/check.cjs while local preview is running.

Verified 13 October 2026: 1440x900, 1024x768, 768x1024, 390x844 and 320x667. No horizontal overflow; next-section hint is visible. All 21 cases, search, priority filtering, empty state, five project dialogs, Escape, Telegram links and three local file downloads passed. No browser warnings/errors. Screenshots are local-only in ignored test-results/. PORTFOLIO_URL can point the same checks at the published site.

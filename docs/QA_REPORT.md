# QA report (checkpoint 3)

Checked on 2026-10-14 against `main`. Everything below was run on the built site (`dist/`).

## Summary

| Check | Result |
|---|---|
| `npm run build` from a clean `npm ci` | Pass: 33 pages, 0 warnings, 0 errors |
| `astro check` (TypeScript and templates) | Pass: 0 errors, 0 warnings, 0 hints |
| Client-side JavaScript | None: 0 `.js` files in `dist/`. The only `<script>` is the JSON-LD data block on Home. |
| Internal links, images and anchors | Pass: 445 references across 33 pages, 0 broken |
| Legacy URLs → `_redirects` | Pass: all 28 legacy URLs, with and without a trailing slash, return 301 and land on a working page |
| Layout at 375 px and 1280 px, light and dark | Pass: 32 pages × 4 views = 128 checks, no horizontal scrolling |
| Headings, alt text, `lang` | Pass: every page has exactly one `h1`, every image has alt text, and every page sets `lang` |
| Lighthouse (mobile) | Home: 100 / 100 / 100 / 100 (performance, accessibility, best practices, SEO) |
| Colour contrast | WCAG AA for all text colours in both themes (lowest 5.6:1) |

## Fixed during QA

- **Layout shift on Home.** Lighthouse scored Home's performance at 83 because of a layout shift of 0.29. The open-book motif was an SVG pinned to the bottom of the hero, so it moved whenever the hero's height settled after first paint. It's now a CSS background, which can't shift. Layout shift is 0, and Home scores 100 on three consecutive runs.

## Details

### Build

- Clean install with `npm ci`, then `npm run build`, run in a fresh checkout. 33 pages: Home, About, Events, Sermons, Contact, Archive plus 3 year pages, 23 posts, and the 404 page.
- 8 photos are converted to WebP at build time, with width and height set so they don't cause layout shift.

### Internal link check

A script parsed every HTML page in `dist/` and resolved every `href`, `src` and `srcset` that points within the site, including `#anchor` targets. Result: 445 references, 0 broken.

### Legacy URLs

`public/_redirects` holds 56 rules: each of the 28 legacy URLs, with and without a trailing slash. They were tested with Cloudflare's local Pages server (`wrangler pages dev`, version 4.145.0), which applies `_redirects` the same way production does.

| Test | Result |
|---|---|
| All 56 rules: status code | 56 × `301` |
| All 56 rules: destination | All point to the page listed in `docs/CONTENT_INVENTORY.md`, and each destination returns `200` |
| Legacy URL with a Google Sites query string (`/home/page-2?authuser=0`) | `301` to the right post |
| `/about` (no trailing slash) | `308` to `/about/` (Cloudflare's automatic slash redirect) |
| An unknown URL | `404` with the site's own 404 page |
| `/robots.txt`, `/sitemap-index.xml` | `200` |

### Layout

Every page in the sitemap (32; the 404 page isn't listed) was loaded in headless Chromium at 375 px and 1280 px, in light and dark mode. Each view was checked for horizontal scrolling, the number of `h1` headings, images without alt text, and a missing `lang` attribute: 0 problems. Home, About, Events, Sermons, Archive, Contact and several posts were also reviewed visually.

### Lighthouse (mobile)

| Page | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Home `/` | 100 | 100 | 100 | 100 |
| About `/about/` | 100 | 100 | 100 | 100 |
| Events `/events/` | 100 | 100 | 100 | 100 |
| Sermons `/sermons/` | 100 | 100 | 100 | 100 |
| Archive `/archive/` | 100 | 100 | 100 | 100 |
| Contact `/contact/` | 100 | 100 | 100 | 100 |
| A post with 4 photos | 98 | 100 | 100 | 100 |

The Events score is likely to drop slightly in production, because the Google Calendar embed couldn't load in the test environment (see below).

### Keyboard and screen readers

- Skip link ("跳到主要内容 Skip to content") is the first focusable element.
- Visible focus ring on every link and button.
- Tab order follows the page: logo, navigation, content, footer.
- The current page is marked with `aria-current` in the navigation and the archive's year filter.
- Every Chinese and English pair has its own `lang` attribute, so screen readers switch voice correctly.

## Not verified from the test environment

The test environment blocks most outside websites, so these links and embeds couldn't be loaded. All are listed in `MIGRATION_TODO.md`.

| Link | Where | Status |
|---|---|---|
| Google Calendar embed and links | Events | Blocked here. Needs the calendar to be public (`MIGRATION_TODO.md` item 8). |
| `http://cn.rrvccc.org/p/blog-page_77.html` | Sermons; post 2017-10-30 | Blocked here. Last Internet Archive capture is from 2019 (item 9). |
| YouTube video | Post 2012-03-08 | Blocked here (item 14) |
| Google Photos album | Post 2017-11-13 | Blocked here (item 14) |
| Google Maps link | Post 2017-10-25 | Blocked here. Standard Google Maps search link. |
| 3 Internet Archive copies (CBN, tenboom.com, wmltblog) | Posts 2012-03-08, 2012-03-30 | The archive reset connections during QA. All three captures are listed in the archive's index with status 200. |
| 2 Google Drive files (MP3, video) | Posts 2018-03-23, 2018-08-27 | Pass: publicly viewable (200) |

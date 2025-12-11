### 2.3.0 (2025-12-11)

##### Chores

* **eslint:**
  *  remove legacy .eslintrc.json (5b640450)
  *  migrate to flat config, add perfectionist, relax a few strict rules, fix lints; remove .eslintignore (aeeb0414)
  *  remove typescript-sort-keys plugin/rules incompatible with ESLint 9 (402617ea)
*  enforce Node 22 with Volta, upgrade deps, move to Zod v4 and dynamic date defaults (5557aa7a)

##### Documentation Changes

*  update upgrade plan for Volta, enforce Node 22, and Zod v4 migration (3a5c7f42)

##### Bug Fixes

*  use new @vercel/flags next export; remove deprecated instrumentationHook (ce1826ca)

##### Tests

* **contact:**  await server component before render to fix async error (c142f32f)
*  add path alias mapper for '@/'; fix module resolution in tests (0d270f08)
*  adjust coverage thresholds post-upgrade; ESM transforms and mocks in place (a25dd928)
*  mock featureFlags barrel export instead of deep path for stability (fed610cd)
*  mock showContactForm as jest.fn to avoid spy redefine errors (4fe476fd)
*  adjust mock unstable_flag to return async function to allow spying (2665c6e7)
*  transform jose/@vercel packages for Jest; add mocks for @vercel flags and edge-config (bb4b6078)

### 2.3.0 (2025-12-11)

##### Chores

* **eslint:**
  *  remove legacy .eslintrc.json (5b640450)
  *  migrate to flat config, add perfectionist, relax a few strict rules, fix lints; remove .eslintignore (aeeb0414)
  *  remove typescript-sort-keys plugin/rules incompatible with ESLint 9 (402617ea)
*  enforce Node 22 with Volta, upgrade deps, move to Zod v4 and dynamic date defaults (5557aa7a)

##### Documentation Changes

*  update upgrade plan for Volta, enforce Node 22, and Zod v4 migration (3a5c7f42)

##### Bug Fixes

*  use new @vercel/flags next export; remove deprecated instrumentationHook (ce1826ca)

##### Tests

* **contact:**  await server component before render to fix async error (c142f32f)
*  add path alias mapper for '@/'; fix module resolution in tests (0d270f08)
*  adjust coverage thresholds post-upgrade; ESM transforms and mocks in place (a25dd928)
*  mock featureFlags barrel export instead of deep path for stability (fed610cd)
*  mock showContactForm as jest.fn to avoid spy redefine errors (4fe476fd)
*  adjust mock unstable_flag to return async function to allow spying (2665c6e7)
*  transform jose/@vercel packages for Jest; add mocks for @vercel flags and edge-config (bb4b6078)

### 2.2.0 (2024-12-07)

##### Chores

*  Bump nextjs version (901911de)
*  Update tests, eslintrc file (cbbcf49b)

##### New Features

*  Update Uses page and tests (03cf2ad8)
*  Integrate database and vercel feature flag system (e75e745e)

### 2.1.0 (2024-05-09)

##### Chores

*  Update all dependencies (a2dbbf7c)

##### New Features

*  Add kotlin and ktor to skills (bc3f2ca1)

## 2.0.0 (2024-01-21)

##### Chores

*  Update plausible analytics (75f8a6e3)
*  Add metadata (7348d089)
*  Add generate-changelog (41aa3702)
*  Scaffold pages and components (49224513)
*  Initial scaffolding (854ca977)

##### Documentation Changes

*  Update README (afc92a3e)

##### New Features

*  Add console log message (0606fd5f)
*  Add animations (4c3e32fe)
*  Finish responsive styling (06ee1d33)
*  Tablet lg horizontal styling (34073710)
*  Tablet small styling (86e89f83)
*  Add MobileExternalNavLink, styling through tablet xs size (b58fe2b2)
*  Styling up to mobile lg (a105c0ea)
*  Add galaxy fold styles for uses pages that were previously missed (b2208c44)
*  Host images locally, fix image components, add galaxy fold size styles (3a857423)
*  Finish mobile small (fe2b29e0)
*  Experience page (e4ae7e66)
*  About page (4e04d3ba)
*  WPAdmin page, remove image console warnings (e412e35d)
*  MobileNav (92fe7767)
*  Uses page (e637df02)
*  Contact Page (fd6b0187)

##### Bug Fixes

*  Update image container styling so image shows on not found page (2a9ce562)

##### Tests

*  Remove console.log (8f79f194)
*  Update tests (ac8d0052)
*  Update tests (1524de21)
*  Add tests (66e213b6)
*  Update tests (8085a320)

## 1.0.0 (2024-01-21)

##### Chores

*  Update plausible analytics (75f8a6e3)
*  Add metadata (7348d089)
*  Add generate-changelog (41aa3702)
*  Scaffold pages and components (49224513)
*  Initial scaffolding (854ca977)

##### Documentation Changes

*  Update README (afc92a3e)

##### New Features

*  Add console log message (0606fd5f)
*  Add animations (4c3e32fe)
*  Finish responsive styling (06ee1d33)
*  Tablet lg horizontal styling (34073710)
*  Tablet small styling (86e89f83)
*  Add MobileExternalNavLink, styling through tablet xs size (b58fe2b2)
*  Styling up to mobile lg (a105c0ea)
*  Add galaxy fold styles for uses pages that were previously missed (b2208c44)
*  Host images locally, fix image components, add galaxy fold size styles (3a857423)
*  Finish mobile small (fe2b29e0)
*  Experience page (e4ae7e66)
*  About page (4e04d3ba)
*  WPAdmin page, remove image console warnings (e412e35d)
*  MobileNav (92fe7767)
*  Uses page (e637df02)
*  Contact Page (fd6b0187)

##### Bug Fixes

*  Update image container styling so image shows on not found page (2a9ce562)

##### Tests

*  Remove console.log (8f79f194)
*  Update tests (ac8d0052)
*  Update tests (1524de21)
*  Add tests (66e213b6)
*  Update tests (8085a320)


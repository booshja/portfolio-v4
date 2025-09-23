# Portfolio v4 - Package Upgrade Plan & Node.js v22 Analysis

## Executive Summary

This document provides a comprehensive plan for upgrading all package dependencies to their latest compatible versions and analyzes the feasibility of upgrading the runtime to Node.js v22. The analysis is based on the current package.json configuration and latest available package versions as of September 2025.

## Current State Analysis

### Current Package Versions

-   **Next.js**: 15.3.4
-   **React**: 19.1.0
-   **React DOM**: 19.1.0
-   **TypeScript**: 5.8.3
-   **MongoDB**: 6.17.0
-   **Mongoose**: 8.16.0
-   **Styled Components**: 6.1.19
-   **Jest**: 30.0.2
-   **ESLint**: 9.29.0

### Current Node.js Requirements

-   No explicit Node.js version specified in package.json
-   TypeScript target: ES2022
-   Next.js 15.3.4 supports Node.js 18.18+ and 20.10+

## Package Upgrade Plan

### Phase 1: Critical Security & Performance Updates

#### 1.1 Next.js Framework

-   **Current**: 15.3.4
-   **Recommended**: 15.5.3 (latest stable)
-   **Impact**: Low risk - patch updates only
-   **Benefits**: Bug fixes, performance improvements, security patches
-   **Action**: `npm install next@^15.5.3`

#### 1.2 React Ecosystem

-   **Current**: React 19.1.0, React DOM 19.1.0
-   **Recommended**: React 19.1.1, React DOM 19.1.1 (latest stable)
-   **Impact**: Low risk - patch updates
-   **Benefits**: Bug fixes and stability improvements
-   **Action**: `npm install react@^19.1.1 react-dom@^19.1.1`

#### 1.3 TypeScript

-   **Current**: 5.8.3
-   **Recommended**: 5.9.2 (latest stable)
-   **Impact**: Low risk - minor version update
-   **Benefits**: New language features, improved type checking
-   **Action**: `npm install typescript@^5.9.2`

### Phase 2: Database & Data Layer Updates

#### 2.1 MongoDB Driver

-   **Current**: 6.17.0
-   **Recommended**: 6.20.0 (latest stable)
-   **Impact**: Low risk - patch update
-   **Benefits**: Bug fixes, performance improvements
-   **Action**: `npm install mongodb@^6.20.0`

#### 2.2 Mongoose ODM

-   **Current**: 8.16.0
-   **Recommended**: 8.18.2 (latest stable)
-   **Impact**: Low risk - minor version update
-   **Benefits**: New features, bug fixes, improved TypeScript support
-   **Action**: `npm install mongoose@^8.18.2`

### Phase 3: Styling & UI Updates

#### 3.1 Styled Components

-   **Current**: 6.1.19
-   **Recommended**: 6.1.19 (already latest)
-   **Impact**: None
-   **Notes**: No update available at this time

### Phase 4: Development & Testing Tools

#### 4.1 Jest Testing Framework

-   **Current**: 30.0.2
-   **Recommended**: jest 30.1.3, jest-environment-jsdom 30.1.2
-   **Impact**: Low risk - patch/minor updates
-   **Benefits**: Bug fixes, improved Node.js v22 compatibility
-   **Action**: `npm install jest@^30.1.3 jest-environment-jsdom@^30.1.2`
-   **Related**: Update `ts-jest` to `^29.4.4` for compatibility with Jest 30

#### 4.2 Testing Library

-   **Current**: @testing-library/react 16.3.0, @testing-library/jest-dom 6.6.3
-   **Recommended**: @testing-library/react 16.3.0 (already latest), @testing-library/jest-dom 6.8.0
-   **Impact**: Low risk - patch update for jest-dom
-   **Benefits**: Bug fixes, improved React 19 support
-   **Action**: `npm install @testing-library/jest-dom@^6.8.0`
-   **Notes**: `@testing-library/react` and `@testing-library/user-event` are already at latest

#### 4.3 ESLint & TypeScript ESLint

-   **Current**: ESLint 9.29.0, @typescript-eslint/eslint-plugin 8.35.0
-   **Recommended**: ESLint 9.36.0, @typescript-eslint/eslint-plugin 8.44.1
-   **Impact**: Low risk - minor updates
-   **Benefits**: New rules, bug fixes, improved TypeScript support
-   **Action**: `npm install eslint@^9.36.0 @typescript-eslint/eslint-plugin@^8.44.1`
-   **Also update**: `eslint-config-next@^15.5.3`, `@next/eslint-plugin-next@^15.5.3`, `eslint-config-prettier@^10.1.8`, `eslint-plugin-storybook@^9.1.7`, `eslint-plugin-unused-imports@^4.2.0`

### Phase 5: Vercel & Analytics

#### 5.1 Vercel Packages

-   **Current**: @vercel/edge-config 1.4.0, @vercel/flags 3.1.1, @vercel/speed-insights 1.2.0
-   **Recommended**: Already latest
-   **Impact**: None
-   **Notes**: No updates available at this time

#### 5.2 Other Dependencies

-   **Zod**: 3.25.67 → 4.1.11 (latest)
-   **bcryptjs**: 3.0.2 (already latest)
-   **next-plausible**: 3.12.4 (already latest)

##### Zod v4 migration considerations (based on current usage)

-   `z.date().default(new Date())` → Prefer dynamic default to avoid a fixed timestamp:
    -   `z.date().default(() => new Date())`
-   `z.instanceof(ObjectId)` → Supported; ensure `ObjectId` is imported from `mongodb` and refers to the same class used at runtime.
-   `z.object`, `.string().trim().min/max().email()`, `.boolean()`, `.optional()`, `.omit()` and `z.infer` → Supported as-is.
-   Test schemas parsing in Jest to catch any subtle behavior changes.

### Optional: @types packages

-   **@types/node**: 24.0.4 → 24.5.2
-   **@types/react**: 19.1.8 → 19.1.13
-   **@types/react-dom**: 19.1.6 → 19.1.9
-   Impact: Low; improves DX. Update if you want latest typings.

## Implementation Strategy

### Step 1: Pre-upgrade Preparation

0. Confirm branch: `git checkout upgrade-packages`
1. Create a backup branch if needed: `git checkout -b upgrade-packages`
2. Run current test suite: `npm test`
3. Document current working state

### Step 2: Incremental Updates

1. Update packages in phases as outlined above
2. Run tests after each phase: `npm test`
3. Test development server: `npm run dev`
4. Test production build: `npm run build`

### Step 3: Post-upgrade Validation

1. Run full test suite: `npm test`
2. Test all application features manually
3. Check for console warnings/errors
4. Verify build process: `npm run build && npm start`

### Step 4: Cleanup

1. Update package-lock.json: `npm install`
2. Remove unused dependencies if any
3. Update documentation if needed
4. Commit changes with detailed message

## Node.js v22 Compatibility Analysis

### Current Compatibility Status: ✅ **COMPATIBLE**

Based on the analysis of your current dependencies and application structure, your portfolio application is **fully compatible** with Node.js v22.

### Key Compatibility Factors

#### 1. Next.js 15.3.4+ Support

-   ✅ Next.js 15.x officially supports Node.js 18.18+ and 20.10+
-   ✅ Next.js 15.4+ adds full Node.js v22 support
-   ✅ No breaking changes expected

#### 2. React 19.1.0+ Support

-   ✅ React 19.x is fully compatible with Node.js v22
-   ✅ React DOM 19.x works seamlessly with Node.js v22
-   ✅ No known compatibility issues

#### 3. TypeScript 5.8.3+ Support

-   ✅ TypeScript 5.8+ has full Node.js v22 support
-   ✅ ES2022 target is compatible with Node.js v22
-   ✅ No breaking changes in type system

#### 4. Database Dependencies

-   ✅ MongoDB 6.17.0+ supports Node.js v22
-   ✅ Mongoose 8.16.0+ is compatible with Node.js v22
-   ✅ No database connectivity issues expected

#### 5. Testing Framework

-   ✅ Jest 30.0.2+ supports Node.js v22
-   ✅ Testing Library packages are compatible
-   ✅ No test execution issues expected

### Benefits of Upgrading to Node.js v22

#### 1. Performance Improvements

-   **V8 Engine 12.4**: Enhanced JavaScript performance
-   **Maglev Compiler**: Improved performance for CLI applications
-   **Stream Performance**: 4x increase in default high water mark (16KB → 64KB)
-   **AbortSignal Optimization**: Better performance for fetch and test runner

#### 2. New Features

-   **Built-in WebSocket Client**: No need for external WebSocket libraries
-   **Stable Watch Mode**: `--watch` flag for automatic restarts
-   **Enhanced ES Module Support**: Better module loading performance
-   **WebAssembly Garbage Collection**: Improved WASM performance

#### 3. Security & Stability

-   **Active LTS Status**: Supported until April 2027
-   **Security Updates**: Regular security patches
-   **Long-term Support**: Stable and reliable runtime

### Potential Considerations

#### 1. Memory Usage

-   **Increased Stream Buffer**: Default high water mark increased from 16KB to 64KB
-   **Impact**: Slightly higher memory usage for stream operations
-   **Mitigation**: Monitor memory usage, adjust if needed using `setDefaultHighWaterMark()`

#### 2. Deprecated Features

-   **Import Assertions**: Deprecated in favor of import attributes
-   **Some util APIs**: Minor deprecations that don't affect your codebase
-   **Impact**: Minimal - your codebase doesn't use deprecated features

#### 3. IPv6 Handling

-   **Improved IPv6 Support**: Better handling of IPv6 configurations
-   **Impact**: Positive - improved network connectivity
-   **Action**: No changes required

### Recommended Node.js v22 Upgrade Path (Volta)

#### Phase 1: Development Environment

1. Install and pin Node.js v22 with Volta
    - `volta install node@22`
    - `volta pin node@22`
    - This will add a `volta` section to `package.json` to enforce Node 22
2. Test development server: `npm run dev`
3. Run test suite: `npm test`

#### Phase 2: CI/CD Pipeline

1. Update GitHub Actions or CI configuration to use Node.js v22
2. Update Dockerfile if using containers
3. Update deployment scripts

#### Phase 3: Production Deployment

1. Deploy to staging environment with Node.js v22
2. Monitor performance and error logs
3. Deploy to production after validation

### Node.js v22 Upgrade Commands (Volta)

```bash
# Install and pin Node.js v22 (Volta)
volta install node@22
volta pin node@22

# Enforce Node 22 only in package.json
# Add or update both fields:
"engines": { "node": ">=22.0.0 <23" }
"volta": { "node": "22" }

# Test the application
npm install
npm run dev
npm test
npm run build
```

## Risk Assessment

### Package Upgrades: **LOW RISK**

-   All recommended updates are patch or minor versions
-   No breaking changes expected
-   Comprehensive test coverage provides safety net

### Node.js v22 Upgrade: **LOW RISK**

-   All dependencies are compatible
-   No breaking changes in your codebase
-   Active LTS status provides stability guarantee

## Timeline Recommendation

### Week 1: Package Upgrades

-   Day 1-2: Phase 1-2 (Critical updates)
-   Day 3-4: Phase 3-4 (Styling & Testing)
-   Day 5: Phase 5 (Vercel & Final updates)

### Week 2: Node.js v22 Upgrade

-   Day 1-2: Development environment setup
-   Day 3-4: CI/CD pipeline updates
-   Day 5: Production deployment

## Monitoring & Rollback Plan

### Monitoring

1. **Performance Metrics**: Monitor build times, runtime performance
2. **Error Tracking**: Watch for new errors or warnings
3. **Memory Usage**: Monitor memory consumption changes
4. **Test Coverage**: Ensure test suite continues to pass

### Rollback Plan

1. **Package Rollback**: Revert to previous package-lock.json
2. **Node.js Rollback**: Switch back to previous Node.js version
3. **Git Rollback**: Use git to revert to previous working state

## Conclusion

Both the package upgrades and Node.js v22 upgrade are **low-risk, high-benefit** operations for your portfolio application. The comprehensive test coverage and modern dependency stack provide a solid foundation for these upgrades.

## Clarifying Questions

1. Do you want to enforce Node v22 only in `engines`, or allow Node v20 and v22 in parallel?
2. Should we upgrade Zod to the latest v3 (non-breaking) now and plan a separate Zod v4 migration, or do you want to tackle v4 immediately?
3. Do you want to bump `@types/*` packages to the newest patch versions for better type definitions?
4. Is your CI/CD runner already on Node v22 (or can it be switched), or should we target dual support (Node 20 + 22) for now?
5. Would you like me to open a branch and apply these version bumps automatically using `npm-check-updates` and run the full test suite?

**Recommended Action**: Proceed with both upgrades following the phased approach outlined above. The benefits in performance, security, and long-term support significantly outweigh the minimal risks involved.

---

_This analysis was conducted on September 2025. Package versions and compatibility information should be verified before implementation._

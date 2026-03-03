# Component Library Audit

**Date:** 2026-03-03
**Reviewer perspective:** Staff-level frontend engineer
**Verdict:** Strong foundations, not yet shippable as a production component library

---

## What's Good

- **Modern, coherent toolchain**: React 19 + Vite 7 + Storybook 10 + Vitest 4 + TypeScript 5.9. Current and well-integrated.
- **Design token system**: CSS custom properties in `src/styles/` with dark mode via `prefers-color-scheme` and `data-theme` attribute.
- **100% test coverage** on all three exported components with meaningful assertions — ref forwarding, callbacks, disabled behavior, state transitions.
- **Accessibility-first**: `eslint-plugin-jsx-a11y`, Storybook a11y addon set to `'error'`, skip-link, `aria-hidden` on decorative SVGs, `focus-visible` outlines.
- **Dual test strategy**: Unit tests in jsdom + Storybook interaction tests in Playwright browser.
- **Clean component APIs**: React 19 ref-as-prop, extending native HTML attributes, `filter(Boolean).join(' ')` for classnames.

---

## Critical Issues

### 1. `coverage/` directory committed to git

Build artifacts are tracked in version control. `.gitignore` lists `dist` and `storybook-static` but not `coverage/`.

### 2. CSS has no consumer-facing export path

The build produces `dist/react-storybook-component-demos.css`, but `package.json` `exports` only maps types, ESM, and CJS:

```json
"exports": {
  ".": {
    "types": "./dist/index.d.ts",
    "import": "./dist/acme.js",
    "require": "./dist/acme.cjs"
  }
}
```

Consumers who `import { Button }` get an unstyled component. With strict `exports`, bundlers won't resolve the CSS file at all.

### 3. CI doesn't run lint, tests, or build

`chromatic.yml` only publishes to Chromatic. No job runs `lint`, `test`, or `build`. Broken code can merge to `main`.

---

## Important Issues

### 4. `Page` is Storybook boilerplate, not a library component

`page.tsx` contains hardcoded Storybook tutorial copy and links to `storybook.js.org`. Exported alongside `Button` and `Header` from `index.ts`, muddying the library's actual surface area.

### 5. Duplicate `User` type

Defined independently in `header.tsx:5-7` and `page.tsx:4-6`. Should be a single shared type.

### 6. No `prepublishOnly` script

Nothing ensures `npm run build` runs before `npm publish`. Stale `dist/` can ship to the registry.

### 7. Peer dependency range too narrow

`"react": "^19.2.0"` requires 19.2+. Should be `^19.0.0` at minimum, or `^18.0.0 || ^19.0.0` for broader adoption.

### 8. Stray `vite.svg` in dist output

Referenced only by the excluded `App` component. Shouldn't be in the distribution.

### 9. No hover/active states on buttons

`button.css` has `:focus-visible` and `:disabled` but no `:hover` or `:active`. Obvious gap for an interactive component.

---

## Minor Issues

- **`const resolvedVariant = variant`** in `button.tsx:33` — no-op alias, use `variant` directly.
- **Hard-coded `fill="#999"`** in `page.tsx:94` — bypasses the design token system.
- **`backgroundColor` prop on Button** undermines the design system's semantic variants. Document as escape hatch at minimum.
- **Identity mismatch**: npm package is `react-storybook-component-demos`, build output is `acme.*`, CSS prefix is `acme-`. Pick one identity.
- **`index.html` + `main.tsx` + `App` component** are Vite scaffold leftovers adding noise to a library repo.

---

## Recommendations (Priority Order)

1. Add `coverage/` to `.gitignore` and remove from repo
2. Add CSS export: `"./styles": "./dist/react-storybook-component-demos.css"` in `exports`
3. Add a real CI workflow: lint + test + build on PRs
4. Remove `Page` from library exports (keep as Storybook-only demo)
5. Add `"prepublishOnly": "npm run build"` to scripts
6. Extract shared `User` type
7. Add `:hover` and `:active` button states
8. Widen peer dep range to `^19.0.0`
9. Resolve naming: `@acme/components` or rename CSS prefix

**Overall grade: B.** Strong engineering fundamentals — the gaps are in distribution packaging and library hygiene. Fix the CSS export and CI pipeline and this is most of the way to shippable.

# AGENTS.md

Guide for coding agents working on the official Hello World module for InvoiceShelf 3.

- **What it is.** The smallest complete module: a page registered with `registerPage`, a sidebar entry, a per-company settings form, record extension slots, a bundled third-party package, committed `dist/` assets, a data cleanup hook and a signed release workflow. It is the module authors' reference, so every change should still read as an example.
- **SDK.** `invoiceshelf/modules` comes from the `InvoiceShelf/modules` VCS repository. Read its README before changing anything that touches the module contract (`module.json`, `composer.json`, the release workflow).
- **Frontend.** `resources/js/init.ts` registers everything inside `window.InvoiceShelf.booting(...)`. Vue is the host's (`window.__invoiceshelf_vue`, see `vite.config.js`), and so are the globally registered `Base*` components. Never call `createApp`. Rebuild and commit `dist/init.js` after any change under `resources/js/`: the host does not run Node.
- **Bundled dependency.** `dependency_policy` is `bundled`: `chillerlan/php-qrcode` (required in `composer.json`) ships in the generated, gitignored `bundle/`, pinned by the committed `bundle.lock`. Rebuild with `vendor/bin/invoiceshelf-module bundle . --host-lock=<host composer.lock>` (add `--update` after changing packages). Never edit `bundle/`, and keep tools out of it (`pint.json` excludes it).
- **Record slots.** `init.ts` registers a panel and a "Say hello" action on invoices and customers and a New-menu entry through the entity extension API; components get a `context` prop with a frozen record snapshot.
- **Checks.** `composer run lint`, `composer run test`, `vendor/bin/invoiceshelf-module validate-package .`, `pnpm run lint`, `pnpm exec tsc --noEmit`, `pnpm run build`; CI fails when `dist/` differs from a fresh build.
- **In a host.** See the README's "Local development". The page lives at `/admin/modules/hello-world/dashboard`.

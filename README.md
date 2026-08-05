# InvoiceShelf Hello World module

A deliberately small, official lifecycle sample for the InvoiceShelf v3 marketplace. It is a reference for the **Module API 1.1** contract—not a template for the newer 1.2 AI-driver and typed frontend-extension APIs.

It demonstrates a module page, sidebar entry, per-company settings, committed frontend assets, signed marketplace packaging, enable/disable behavior, and data-aware uninstall. The source and compiled asset are licensed `AGPL-3.0-only`.

## Exact compatibility

The checked-in `module.json` declares:

| Dependency | Constraint |
| --- | --- |
| InvoiceShelf | `^3.0.0` |
| Module API | `^1.1.0` |
| PHP | `^8.3.0` |
| Required extension | `ext-json` |

`^3.0.0` begins with the final 3.0.0 release, so this sample does not declare compatibility with InvoiceShelf prereleases such as `3.0.0-alpha.*`. Do not copy that constraint for a module intended for the current v3 preview; use an explicit prerelease range after testing it instead.

## Development

Requirements: PHP 8.3 or newer, Composer, Node.js 22, and pnpm 11.

```bash
composer install
pnpm install --frozen-lockfile
composer run lint
composer run test
pnpm run build
vendor/bin/invoiceshelf-module validate-package .
```

`dist/init.js` is committed because InvoiceShelf installs immutable module packages without running Composer or Node package managers. Rebuild and commit it whenever the Vue source changes.

## Lifecycle and data removal

Disabling the module removes its active UI and routes while keeping its configuration. Uninstalling removes the package. When an administrator explicitly selects **Remove module data**, InvoiceShelf calls the module's `DataCleanup` hook first, runs every module migration's `down()` method, then removes host-managed settings.

Hello World does not create persistent module data, so its cleanup implementation is intentionally empty. It is still a useful reference: cleanup must be safe to retry and should remove module-owned files, external resources, or shared-table rows that reversible migrations do not cover.

## Releases

The manifest version is currently `1.1.0`. Release tags must be exact, unprefixed SemVer matching that version, such as `1.1.0`; the tag workflow uses the SDK `3.2.0` release workflow to validate, package, sign, and register the module with the InvoiceShelf marketplace.

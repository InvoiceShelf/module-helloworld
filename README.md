# InvoiceShelf Hello World module

The official reference module for the InvoiceShelf v3 marketplace. It is deliberately small, but exercises the complete first-party module contract:

- a signed, versioned marketplace package;
- a Vue page registered in the host application;
- a sidebar entry;
- schema-driven, per-company settings; and
- install, enable, disable, update, and data-aware uninstall lifecycle support.

The module is free and open source. Its source and compiled frontend asset are licensed under AGPL-3.0-only.

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

`dist/init.js` is committed because InvoiceShelf installs immutable packages without running Composer or Node package managers. Rebuild it whenever the Vue source changes.

## Uninstall cleanup

When an administrator explicitly selects **Remove module data**, InvoiceShelf first invokes the module's `DataCleanup` implementation while its tables are still available. That hook handles resources outside module migrations, such as shared-table rows, generated files, or external integrations. InvoiceShelf then runs every migration's `down()` method and removes its host-managed settings. Cleanup implementations must be safe to retry after a partial failure.

Hello World does not create persistent module data, so its cleanup implementation is intentionally empty and serves as the reference no-op implementation.

## Releases

Every stable release uses an exact, unprefixed SemVer tag matching `module.json` (for example, `1.0.0`). The tag workflow calls the versioned InvoiceShelf module SDK workflow, verifies the source, builds a deterministic ZIP, signs its release manifest in the protected `module-release` environment, and uploads it to the InvoiceShelf marketplace ingest API.

The repository environment supplies the signing key and the module-scoped ingest credential. They are never stored in this repository.

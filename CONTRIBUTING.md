# Contributing

Hello World is the reference module for InvoiceShelf 3: keep it small, and keep every part of it something a module author can copy.

## Checks

The same as CI:

```bash
composer install
vendor/bin/invoiceshelf-module bundle . --host-lock=<host composer.lock>   # builds bundle/ from bundle.lock
composer run lint
composer run test
vendor/bin/invoiceshelf-module validate-module module.json
vendor/bin/invoiceshelf-module validate-package .

pnpm install --frozen-lockfile
pnpm run lint
pnpm exec tsc --noEmit
pnpm run build          # commit dist/: the host never runs Node
```

PHP 8.4, Node 24, pnpm 11. Running the module inside a host is described in the README under "Local development", and adding or updating a bundled package under "Dependency management": commit `bundle.lock`, never `bundle/`.

## Releasing

Set `version` in `module.json` and `package.json`, rebuild `dist/`, check `host-version` in `.github/workflows/release.yml` is the oldest InvoiceShelf release the version supports, merge, then push an unprefixed tag equal to the version (`1.2.0`, not `v1.2.0`). The tag workflow calls the SDK's reusable release workflow, which validates, packages, signs and registers the release with the marketplace.

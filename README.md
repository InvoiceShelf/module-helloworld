# InvoiceShelf Hello World module

The official reference module for InvoiceShelf 3: the smallest complete module, meant to be read and copied.

It shows:

- a page registered with `registerPage`, a sidebar entry and a per-company settings form;
- extension slots on host records: a panel and a "Say hello" action on invoices and customers, and an entry in the global New menu;
- a **bundled third-party package**: the page's QR code is drawn on the server by [`chillerlan/php-qrcode`](https://github.com/chillerlan/php-qrcode), which InvoiceShelf does not ship;
- committed frontend assets, a data cleanup hook for uninstall, and the signed marketplace release workflow.

Source and compiled assets are licensed `AGPL-3.0-only`.

## Compatibility

| Dependency | Constraint in `module.json` |
| --- | --- |
| InvoiceShelf | `>=3.0.0-alpha.12 <4.0.0` |
| Module API | `^1.4.0` (bundled dependencies and record slots) |
| PHP | `^8.4.0` |
| Extensions | `ext-json`, `ext-mbstring` (the bundled QR library needs it) |

The InvoiceShelf range names the alpha it starts at on purpose: a caret range such as `^3.0.0` excludes every `3.0.0-alpha.*` prerelease.

## Local development

You need PHP 8.4, Composer, Node 24 and pnpm 11, and an InvoiceShelf 3.x checkout to run the module in.

1. **Put the module where the host looks for modules.** Clone it into the host's `Modules/HelloWorld` (the folder name is the module's `name` in `module.json`). In the InvoiceShelf devenv, keep `module-helloworld` as a sibling checkout and symlink it instead: `ln -s ../../module-helloworld InvoiceShelf/Modules/HelloWorld`, plus a bind mount of the sibling directory into the PHP container so the link resolves there too.
2. **Install the module's own tools.** In the module directory: `composer install` (the SDK, PHPUnit, Pint and the module's packages, for its tests) and `pnpm install`.
3. **Build the bundle** against the host you run:

   ```bash
   vendor/bin/invoiceshelf-module bundle . --host-lock=../../composer.lock          # module inside the host's Modules/
   vendor/bin/invoiceshelf-module bundle . --host-lock=../InvoiceShelf/composer.lock # sibling checkout
   ```

   This writes `bundle/` from the committed `bundle.lock`. Rebuild it whenever you change a package or update the host.
4. **Build the frontend.** `pnpm run build` writes `dist/init.js`. There is no hot reload: rebuild after every change under `resources/js/` and reload the page.
5. **Install it into the host.** From the host: `php artisan install:module HelloWorld 2.0.0`. That checks the bundle against the host, runs the module's migrations, enables it and fires the lifecycle events, as a marketplace install would. A missing or stale `bundle/` is refused with the command to run.
6. **Open it.** Sign in and use the Hello World entry in the sidebar (`/admin/modules/hello-world/dashboard`), then open any invoice or customer to see the panel and the "Say hello" action.

The module's tests run without a host, on Orchestra Testbench and the packages Composer installed in `vendor/`: `composer run test`.

A local host has its own development packages installed, and the host's copy of a package always wins over a bundled one. When a bundled package is also a development dependency of the host, `bundle` warns about it; the release is built against the host's production packages, where that cannot happen.

## Dependency management

A module never runs Composer on the server, and the host's `vendor/` is read-only. Where a module's PHP code comes from is its `dependency_policy` in `module.json`:

| Policy | `composer.json` may require | Use it when |
| --- | --- | --- |
| `host-provided-only` | `php`, `ext-*`, `invoiceshelf/modules` | Everything the module needs is in Laravel, the SDK or the host already. |
| `bundled` | the above plus third-party packages | The module needs a library the host does not ship. Needs module API `^1.4.0`. |

Hello World is `bundled`, for one package.

**Adding a package.** Require it as usual, then resolve the bundle again:

```bash
composer require vendor/package
vendor/bin/invoiceshelf-module bundle . --host-lock=<host composer.lock> --update
```

`bundle` resolves your third-party packages as if every production package of that host were already installed. Composer reuses what the host ships (and records the constraint in `bundle/bundle.json` under `host_packages`), installs only what the host lacks, and refuses outright when a package needs a version of a host package the host does not have. The result goes to:

- `bundle.lock`, **committed**: the exact versions the module ships. Review its diff like code: signing a release vouches for everything inside it.
- `bundle/`, **gitignored and generated**: the package files, `classmap.php` (which the host reads as data and loads after its own autoloader) and `bundle.json`. Keep your tools out of it (here, `"exclude": ["bundle"]` in `pint.json`).

Without `--update`, `bundle` installs exactly `bundle.lock` and fails when it no longer fits the host, when `composer.json` no longer needs a locked package, or when `composer.lock` holds different versions than the bundle (the tests run on `vendor/`, the archive ships `bundle/`).

**What a bundle must pass.** Every package's license must be one an AGPL-3.0-only module can convey (Composer's license list counts as alternatives), every extension a package needs must be listed in `compatibility.extensions` (core ones such as `ext-json` excepted), and no package may be a Composer plugin, define classes or functions in a host, Laravel, Composer or `Modules\` namespace, contain a symbolic link, or push the archive past the marketplace's 10,000 entries.

**What the host checks.** On marketplace install, `install:module`, enabling the module and every container start, InvoiceShelf refuses or disables a bundled module when an installed host package no longer satisfies a recorded constraint, a bundled package's PHP range excludes the running PHP, or a package, class or function in the bundle is already provided by the host or another module. A bundled package's Composer `files` entries run only while the module is enabled.

**Releasing.** The release workflow takes `host-version`, the oldest InvoiceShelf release the module supports, builds `bundle/` from `bundle.lock` against that release's `composer.lock`, and ships it in the signed archive next to `dist/`. Newer hosts are checked against `host_packages` when they install it.

## Lifecycle and data removal

Disabling the module removes its page, sidebar entry and record slots and keeps its settings. Uninstalling removes the package. When an administrator ticks **Remove module data**, InvoiceShelf calls the module's `DataCleanup` hook first, runs every migration's `down()`, then removes the settings the host stored.

Hello World stores nothing of its own, so its cleanup is intentionally empty. A real cleanup must be safe to run twice and remove what reversible migrations do not cover: files, external resources, rows in shared tables.

## Releases

Releases are cut by pushing a tag equal to `module.json`'s `version` (unprefixed, such as `2.0.0`). The tag workflow uses the SDK's reusable workflow (`module-release.yml@3.5.0`) to validate, bundle, package, sign and register the release with the InvoiceShelf marketplace. See [CONTRIBUTING.md](CONTRIBUTING.md) for the checks to run first.

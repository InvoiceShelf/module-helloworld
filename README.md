# InvoiceShelf Hello World module

The official reference module for InvoiceShelf 3: the smallest complete module, meant to be read and copied.

It shows a page registered with `registerPage`, a sidebar entry, a per-company settings form, committed frontend assets, a data cleanup hook for uninstall, and the signed marketplace release workflow. Source and compiled assets are licensed `AGPL-3.0-only`.

## Compatibility

| Dependency | Constraint in `module.json` |
| --- | --- |
| InvoiceShelf | `>=3.0.0-alpha.3 <4.0.0` |
| Module API | `^1.3.0` |
| PHP | `^8.4.0` |
| Extensions | `ext-json` |

The InvoiceShelf range names the alpha it starts at on purpose: a caret range such as `^3.0.0` excludes every `3.0.0-alpha.*` prerelease.

## Local development

You need PHP 8.4, Composer, Node 24 and pnpm 11, and an InvoiceShelf 3.x checkout to run the module in.

1. **Put the module where the host looks for modules.** Clone it into the host's `Modules/HelloWorld` (the folder name is the module's `name` in `module.json`). In the InvoiceShelf devenv, keep `module-helloworld` as a sibling checkout and symlink it instead: `ln -s ../../module-helloworld InvoiceShelf/Modules/HelloWorld`, plus a bind mount of the sibling directory into the PHP container so the link resolves there too.
2. **Install the module's own tools.** In the module directory: `composer install` (the SDK, PHPUnit, Pint) and `pnpm install`.
3. **Build the frontend.** `pnpm run build` writes `dist/init.js`. There is no hot reload: rebuild after every change under `resources/js/` and reload the page.
4. **Install it into the host.** From the host: `php artisan install:module HelloWorld 1.2.0`. That runs the module's migrations, enables it and fires the lifecycle events, as a marketplace install would.
5. **Open it.** Sign in and use the Hello World entry in the sidebar (`/admin/modules/hello-world/dashboard`).

The module's tests run without a host, on Orchestra Testbench: `composer run test`.

## Lifecycle and data removal

Disabling the module removes its page and sidebar entry and keeps its settings. Uninstalling removes the package. When an administrator ticks **Remove module data**, InvoiceShelf calls the module's `DataCleanup` hook first, runs every migration's `down()`, then removes the settings the host stored.

Hello World stores nothing of its own, so its cleanup is intentionally empty. A real cleanup must be safe to run twice and remove what reversible migrations do not cover: files, external resources, rows in shared tables.

## Releases

Releases are cut by pushing a tag equal to `module.json`'s `version` (unprefixed, such as `1.2.0`). The tag workflow uses the SDK's reusable workflow (`module-release.yml@3.4.0`) to validate, package, sign and register the release with the InvoiceShelf marketplace. See [CONTRIBUTING.md](CONTRIBUTING.md) for the checks to run first.

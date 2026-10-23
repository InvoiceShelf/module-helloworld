import DashboardPage from './pages/DashboardPage.vue'

/** The module.json slug: registered pages live under /admin/modules/hello-world. */
const MODULE = 'hello-world'

/**
 * Everything Hello World adds to the host, registered before the app mounts.
 *
 * `registerPage` mounts the page inside the host's company layout, behind its
 * auth guard, and removes it again when the module is disabled.
 */
window.InvoiceShelf.booting((_app, _router, extensions) => {
  extensions.registerPage({
    id: 'dashboard',
    module: MODULE,
    path: 'dashboard',
    component: DashboardPage,
    meta: {
      title: 'Hello World',
    },
  })
})

import DashboardPage from './pages/DashboardPage.vue'

window.InvoiceShelf.booting((_app, router) => {
  router.addRoute('admin', {
    path: 'modules/hello-world/dashboard',
    name: 'modules.hello-world.dashboard',
    component: DashboardPage,
    meta: {
      requiresAuth: true,
    },
  })
})

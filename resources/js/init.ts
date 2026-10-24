import { defineComponent, h } from 'vue'
import type { Component } from 'vue'
import type { InvoiceShelfExtensionApi } from '@invoiceshelf/modules/frontend'
import DashboardPage from './pages/DashboardPage.vue'
import RecordGreetingPanel from './extensions/RecordGreetingPanel.vue'
import SayHelloButton from './extensions/SayHelloButton.vue'
import SayHelloMenuItem from './extensions/SayHelloMenuItem.vue'

/** The module.json slug: registered pages live under /admin/modules/hello-world. */
const MODULE = 'hello-world'
const DASHBOARD = `/admin/modules/${MODULE}/dashboard`

/**
 * Everything Hello World adds to the host, registered before the app mounts.
 * Each registration returns a teardown, and the host runs them all when the
 * module is disabled, so nothing here needs cleaning up by hand.
 */
window.InvoiceShelf.booting((_app, _router, extensions) => {
  extensions.addMessages({
    en: {
      hello_world: {
        open: 'Hello World',
        say_hello: 'Say hello',
      },
    },
  })

  extensions.registerPage({
    id: 'dashboard',
    module: MODULE,
    path: 'dashboard',
    component: withHost(extensions, DashboardPage),
    meta: {
      title: 'Hello World',
    },
  })

  // A record's own screens: a panel on its page, an action in each list row's
  // menu and one on its page. The same components serve invoices and
  // customers, because the context hands them a plain snapshot of the record.
  for (const entity of ['invoice', 'customer'] as const) {
    extensions.registerEntityPanel(entity, { id: `${MODULE}.greeting`, component: RecordGreetingPanel })
    extensions.registerEntityAction(entity, 'list', {
      id: `${MODULE}.say-hello`,
      component: SayHelloMenuItem,
      props: { notify: extensions.notify.bind(extensions) },
    })
  }
  extensions.registerEntityAction('invoice', 'detail', {
    id: `${MODULE}.say-hello`,
    component: SayHelloButton,
    props: { notify: extensions.notify.bind(extensions) },
  })

  // An entry in the global New menu and the command palette.
  extensions.registerCreateAction({
    id: `${MODULE}.open`,
    label: 'hello_world.open',
    icon: 'HandRaisedIcon',
    to: DASHBOARD,
  })
})

/**
 * Hand a page the host services it cannot reach by itself: a module bundle
 * runs on the host's Vue but not on its Pinia or router injections, so the
 * HTTP client arrives as a prop. Route params arrive as attrs.
 */
function withHost(extensions: InvoiceShelfExtensionApi, page: Component): Component {
  return defineComponent({
    setup: (_props, { attrs }) => () => h(page, { ...attrs, client: extensions.client }),
  })
}

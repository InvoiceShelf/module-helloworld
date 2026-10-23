<template>
  <BasePage>
    <BasePageHeader title="Hello World">
      <BaseBreadcrumb>
        <BaseBreadcrumbItem title="Home" to="dashboard" />
        <BaseBreadcrumbItem title="Hello World" to="#" active />
      </BaseBreadcrumb>
    </BasePageHeader>

    <div class="mt-6 grid gap-6 lg:grid-cols-3">
      <BaseCard class="lg:col-span-2">
        <div class="p-6 sm:p-8">
          <div class="flex items-center gap-4">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50">
              <BaseIcon name="HandRaisedIcon" class="h-7 w-7 text-primary-500" />
            </div>
            <div>
              <p class="text-sm font-medium text-primary-600">Installed from the marketplace</p>
              <h2 class="mt-1 text-2xl font-semibold text-heading">{{ greeting }}</h2>
            </div>
          </div>

          <p class="mt-5 max-w-2xl text-sm leading-6 text-muted">
            This page, its sidebar link, and the settings form are supplied by an independently
            versioned InvoiceShelf module. The host loads only the module's compiled local asset.
          </p>

          <div
            class="mt-5 inline-flex rounded-lg bg-green-50 px-3 py-2 text-sm font-medium text-green-700"
          >
            Marketplace update path verified
          </div>

          <div class="mt-6 flex flex-wrap gap-3">
            <span class="rounded-full bg-surface-secondary px-3 py-1 text-xs font-medium text-body">
              Version {{ moduleVersion }}
            </span>
            <span class="rounded-full bg-surface-secondary px-3 py-1 text-xs font-medium text-body">
              Module API 1.4
            </span>
            <span class="rounded-full bg-surface-secondary px-3 py-1 text-xs font-medium text-body">
              Signed package
            </span>
          </div>
        </div>
      </BaseCard>

      <BaseCard class="lg:col-span-2">
        <div class="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
          <div class="flex h-40 w-40 shrink-0 items-center justify-center rounded-xl bg-white p-2 ring-1 ring-black/5">
            <img v-if="qr" :src="qr.data_uri" alt="QR code that opens Hello World" class="h-full w-full">
            <BaseSpinner v-else-if="!qrFailed" class="h-6 w-6 text-subtle" />
            <BaseIcon v-else name="ExclamationTriangleIcon" class="h-6 w-6 text-subtle" />
          </div>
          <div>
            <p class="text-sm font-medium text-primary-600">Rendered by a bundled package</p>
            <h3 class="mt-1 text-lg font-semibold text-heading">Scan to open Hello World on your phone</h3>
            <p class="mt-2 max-w-xl text-sm leading-6 text-muted">
              The server draws this code with <code>chillerlan/php-qrcode</code>, a library InvoiceShelf does not
              ship. The module carries it in its <code>bundle/</code> folder, built at release against the host's
              own packages and checked by the host when the module is installed.
            </p>
            <p v-if="qr" class="mt-2 break-all text-xs text-subtle">{{ qr.target }}</p>
          </div>
        </div>
      </BaseCard>

      <BaseCard>
        <div class="p-6 sm:p-8">
          <h3 class="text-base font-semibold text-heading">What this verifies</h3>
          <ul class="mt-4 space-y-3 text-sm text-muted">
            <li v-for="item in checks" :key="item" class="flex items-start gap-2">
              <BaseIcon name="CheckCircleIcon" class="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </BaseCard>
    </div>
  </BasePage>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { AxiosInstance } from 'axios'

const props = defineProps<{ client: AxiosInstance }>()

const qr = ref<{ target: string; data_uri: string } | null>(null)
const qrFailed = ref(false)

onMounted(async () => {
  try {
    const { data } = await props.client.get('/api/v1/hello-world/qr')
    qr.value = data
  } catch {
    qrFailed.value = true
  }
})

const moduleVersion = __MODULE_VERSION__
const greeting = 'Hello from an official InvoiceShelf module!'
const checks = [
  'The page is registered with registerPage before the app mounts.',
  'The sidebar contribution comes from the module registry.',
  'Settings are rendered and stored by the host per company.',
  'Invoices and customers show a Hello World panel and a Say hello action.',
  'The QR code comes from a package the module bundles.',
  `Version ${moduleVersion} was delivered as a signed, immutable update.`,
]
</script>

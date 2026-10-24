<template>
  <BaseDropdownItem @click="sayHello">
    <BaseIcon name="HandRaisedIcon" class="me-3 h-5 w-5 text-subtle" />
    {{ $t('hello_world.say_hello') }}
  </BaseDropdownItem>
</template>

<script setup lang="ts">
import type { EntityContext } from '@invoiceshelf/modules/frontend'

const props = defineProps<{
  context: EntityContext
  notify: (type: 'success' | 'error' | 'warning' | 'info', message: string) => void
}>()

function sayHello(): void {
  const record = props.context.record()
  props.notify('success', `Hello, ${record?.number ?? `#${record?.id}`}!`)
}
</script>

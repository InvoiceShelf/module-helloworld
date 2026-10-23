<template>
  <BaseButton variant="primary-outline" @click="sayHello">
    <template #left="slotProps">
      <BaseIcon name="HandRaisedIcon" :class="slotProps.class" />
    </template>
    {{ $t('hello_world.say_hello') }}
  </BaseButton>
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

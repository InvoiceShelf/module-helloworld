<template>
  <BaseCard container-class="flex items-center gap-3 px-4 py-3">
    <BaseIcon name="HandRaisedIcon" class="h-5 w-5 shrink-0 text-primary-500" />
    <p class="text-sm text-body">
      Hello World sees this {{ label }}: <strong class="text-heading">{{ record?.number ?? `#${record?.id}` }}</strong>{{ record?.status ? ` (${record.status})` : '' }}
    </p>
  </BaseCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { EntityContext } from '@invoiceshelf/modules/frontend'

const props = defineProps<{ context: EntityContext }>()

// record() returns a frozen snapshot, so reading it can never change the host's copy.
const record = computed(() => props.context.record())
const label = computed(() => props.context.entity.replace('-', ' '))
</script>

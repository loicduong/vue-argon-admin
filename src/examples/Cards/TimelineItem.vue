<script setup lang="ts">
defineOptions({
  name: 'TimelineItem',
})

interface Props {
  color?: string
  icon: {
    component: string
    color: string
  }
  title: string
  dateTime?: string
  description?: string
  badges?: unknown[]
}

withDefaults(defineProps<Props>(), {
  color: '',
  dateTime: '',
  description: '',
  badges: () => [],
})
</script>

<template>
  <div class="mb-3 timeline-block">
    <span class="timeline-step p-3" :class="`bg-${color}`">
      <i :class="`text-${icon.color} text-gradient ${icon.component}`" />
    </span>
    <div class="timeline-content">
      <h6 class="mb-0 text-sm font-weight-bold text-dark">
        {{ title }}
      </h6>
      <p class="mt-1 mb-0 text-xs text-secondary font-weight-normal">
        {{ dateTime }}
      </p>
      <p v-if="description" class="mt-3 mb-2 text-sm text-dark">
        {{ description }}
      </p>
      <span v-for="(badge, index) of badges" :key="index" :class="`badge badge-sm bg-gradient-${icon.color} me-1`">
        {{ badge }}
      </span>
    </div>
  </div>
</template>

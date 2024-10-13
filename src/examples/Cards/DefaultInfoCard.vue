<script setup lang="ts">
interface Props {
  icon?: string | {
    component?: string
    background?: string
  }
  title: string
  description?: string
  value?: string | number
}

withDefaults(defineProps<Props>(), {
  icon: () => ({
    background: 'bg-gradient-success',
    component: '',
  }),
  description: '',
  value: '',
})
</script>

<template>
  <div class="card">
    <div class="p-3 mx-4 text-center card-header d-flex justify-content-center">
      <div :class="`icon icon-shape icon-lg shadow text-center border-radius-lg ${typeof icon === 'object' ? icon.background : ''}`">
        <i class="opacity-10" :class="typeof icon === 'string' ? icon : icon.component" aria-hidden="true" />
      </div>
    </div>
    <div class="p-3 pt-0 text-center card-body">
      <h6 class="mb-0 text-center">
        {{ title }}
      </h6>
      <span class="text-xs">{{ description }}</span>
      <hr class="my-3 horizontal dark">
      <h5 class="mb-0">
        {{ value }}
      </h5>
    </div>
  </div>
</template>

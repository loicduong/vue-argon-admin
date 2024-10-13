<script setup lang="ts">
interface Props {
  color?: string
  size?: string
}

withDefaults(defineProps<Props>(), {
  color: 'success',
  size: 'md',
})

function getClasses(color?: string, size?: string) {
  const colorValue = color ? `pagination-${color}` : null
  const sizeValue = size ? `pagination-${size}` : null

  return `${colorValue} ${sizeValue}`
}
</script>

<template>
  <ul class="pagination" :class="getClasses(color, size)">
    <slot />
  </ul>
</template>

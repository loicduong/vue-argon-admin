<script setup lang="ts">
defineOptions({
  name: 'ArgonPagination',
})

interface Props {
  color?: string
  size?: string
}

withDefaults(defineProps<Props>(), {
  color: 'success',
  size: 'md',
})

function getClasses(color?: Props['color'], size?: Props['size']) {
  let colorValue, sizeValue

  colorValue = color ? `pagination-${color}` : null
  sizeValue = size ? `pagination-${size}` : null

  return `${colorValue} ${sizeValue}`
}
</script>

<template>
  <ul class="pagination" :class="getClasses(color, size)">
    <slot />
  </ul>
</template>

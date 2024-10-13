<script setup lang="ts">
interface Props {
  size?: string
  color?: string
  variant?: string
  circular?: boolean
  floating?: boolean
}

withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'success',
  variant: 'fill',
  circular: false,
  floating: false,
})

function getClasses(variant?: string, color?: string, size?: string, circular?: boolean, floating?: boolean) {
  let colorValue

  if (variant === 'gradient') {
    colorValue = `bg-gradient-${color}`
  }
  else {
    colorValue = `badge-${color}`
  }

  const sizeValue = size ? `badge-${size}` : null

  const circleValue = circular ? 'badge-circle' : null

  const floatingValue = floating ? 'badge-floating' : null

  return `${colorValue} ${sizeValue} ${circleValue} ${floatingValue}`
}
</script>

<template>
  <span class="badge" :class="getClasses(variant, color, size, circular, floating)">
    <slot />
  </span>
</template>

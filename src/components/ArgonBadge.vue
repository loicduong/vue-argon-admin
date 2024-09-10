<script setup lang="ts">
defineOptions({
  name: 'ArgonBadge',
})

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

function getClasses(variant?: Props['variant'], color?: Props['color'], size?: Props['size'], circular?: Props['circular'], floating?: Props['floating']) {
  let colorValue, sizeValue, circleValue, floatingValue

  if (variant === 'gradient') {
    colorValue = `bg-gradient-${color}`
  }
  else {
    colorValue = `badge-${color}`
  }

  sizeValue = size ? `badge-${size}` : null

  circleValue = circular ? 'badge-circle' : null

  floatingValue = floating ? 'badge-floating' : null

  return `${colorValue} ${sizeValue} ${circleValue} ${floatingValue}`
}
</script>

<template>
  <span class="badge" :class="getClasses(variant, color, size, circular, floating)">
    <slot />
  </span>
</template>

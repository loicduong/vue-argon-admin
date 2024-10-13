<script setup lang="ts">
interface Props {
  color?: string
  size?: string
  variant?: string
  fullWidth?: boolean
  active?: boolean
}

withDefaults(defineProps<Props>(), {
  color: 'success',
  size: 'md',
  variant: 'fill',
  fullWidth: false,
  active: false,
})

function getClasses(variant?: string, color?: string, size?: string, fullWidth?: boolean, active?: boolean) {
  let colorValue

  // Setting the button variant and color
  if (variant === 'gradient') {
    colorValue = `bg-gradient-${color}`
  }
  else if (variant === 'outline') {
    colorValue = `btn-outline-${color}`
  }
  else {
    colorValue = `btn-${color}`
  }

  const sizeValue = size ? `btn-${size}` : null

  const fullWidthValue = fullWidth ? `w-100` : null

  const activeValue = active ? `active` : null

  return `${colorValue} ${sizeValue} ${fullWidthValue} ${activeValue}`
}
</script>

<template>
  <button class="btn mb-0" :class="getClasses(variant, color, size, fullWidth, active)">
    <slot />
  </button>
</template>

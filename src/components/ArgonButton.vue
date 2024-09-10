<script setup lang="ts">
defineOptions({
  name: 'ArgonButton',
})

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

function getClasses(variant?: Props['variant'], color?: Props['color'], size?: Props['size'], fullWidth?: Props['fullWidth'], active?: Props['active']) {
  let colorValue, sizeValue, fullWidthValue, activeValue

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

  sizeValue = size ? `btn-${size}` : null

  fullWidthValue = fullWidth ? `w-100` : null

  activeValue = active ? `active` : null

  return `${colorValue} ${sizeValue} ${fullWidthValue} ${activeValue}`
}
</script>

<template>
  <button class="btn mb-0" :class="getClasses(variant, color, size, fullWidth, active)">
    <slot />
  </button>
</template>

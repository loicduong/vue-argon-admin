<script setup lang="ts">
interface Props {
  color?: string
  variant?: string
  percentage: number
}

withDefaults(defineProps<Props>(), {
  color: 'success',
  variant: 'fill',
})

function getClasses(color?: string, variant?: string) {
  let colorValue

  if (variant === 'gradient') {
    colorValue = `bg-gradient-${color}`
  }
  else {
    colorValue = `bg-${color}`
  }

  return `${colorValue}`
}
</script>

<template>
  <div class="progress">
    <div class="progress-bar" :class="getClasses(color, variant)" :style="{ width: `${percentage}%` }" />
  </div>
</template>

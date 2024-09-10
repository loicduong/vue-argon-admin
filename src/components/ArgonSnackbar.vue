<script setup lang="ts">
defineOptions({
  name: 'ArgonSnackbar',
})

interface Props {
  title: string
  date: string
  description: string
  icon: string
  color?: string
  iconColor?: string
  closeHandler: () => void
}

withDefaults(defineProps<Props>(), {
  color: 'success',
  iconColor: 'success',
})

function getColor(color?: Props['color']) {
  let colorValue

  if (color === 'white') {
    colorValue = 'bg-white'
  }
  else {
    colorValue = `bg-gradient-${color}`
  }
}

function getIcon(icon?: Props['icon'], iconColor?: Props['iconColor']) {
  return icon && iconColor ? `${icon} text-${iconColor}` : null
}

function getTextColor(color?: Props['color']) {
  return color === 'white' ? 'text-dark' : 'text-white'
}

function getHrColor(color?: Props['color']) {
  return color === 'white' ? 'dark' : 'light'
}
</script>

<template>
  <div class="toast fade show p-2 mt-2" :class="getColor(color)">
    <div class="toast-header bg-transparent border-0">
      <i class="me-2" :class="getIcon(icon, iconColor)" />
      <span class="me-auto font-weight-bold" :class="getTextColor(color)">
        {{ title }}
      </span>
      <small :class="getTextColor(color)">{{ date }}</small>
      <i class="fas fa-times text-md ms-3 cursor-pointer" :class="getTextColor(color)" @click="closeHandler" />
    </div>
    <hr class="horizontal dark m-0" :class="getHrColor(color)">
    <div class="toast-body" :class="getTextColor(color)">
      {{ description }}
    </div>
  </div>
</template>

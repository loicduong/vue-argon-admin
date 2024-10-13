<script setup lang="ts">
interface Props {
  color?: string
  icon?: string
  dismissible?: boolean
}

withDefaults(defineProps<Props>(), {
  color: 'success',
  icon: '',
  dismissible: false,
})

function getClasses(color: string, dismissible: boolean) {
  let colorValue: string | null = null
  let dismissibleValue: string | null = null

  colorValue = color ? `alert-${color}` : null
  dismissibleValue = dismissible ? 'alert-dismissible fade show' : null
  return `${colorValue} ${dismissibleValue}`
}

const getIcon = (icon: string) => (icon || null)
</script>

<template>
  <div class="alert text-white font-weight-bold" role="alert" :class="getClasses(color, dismissible)">
    <span class="alert-icon">
      <i :class="getIcon(icon)" />
    </span>
    <span class="alert-text">
      &nbsp;
      <slot />
    </span>
    <button
      v-if="dismissible"
      type="button"
      class="btn-close d-flex justify-content-center align-items-center"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true" class="text-lg font-weight-bold">&times;</span>
    </button>
  </div>
</template>

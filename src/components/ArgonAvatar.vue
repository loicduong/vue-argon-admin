<script setup lang="ts">
interface Props {
  image: string
  alt?: string
  size?: string | null
  shadow?: string | null
  borderRadius?: string | null
  circular?: boolean
}

withDefaults(defineProps<Props>(), {
  alt: '',
  size: null,
  shadow: null,
  borderRadius: null,
  circular: false,
})

const getSize = (size?: string | null) => (size ? `avatar-${size}` : null)
function getClasses(shadow?: string | null, circular?: boolean, borderRadius?: string | null) {
  let shadowValue: string | null

  if (shadow) {
    shadowValue = shadow === 'regular' ? 'shadow' : `shadow-${shadow}`
  }
  else {
    shadowValue = null
  }

  const circularValue = circular ? 'rounded-circle' : null
  const borderRadiusValue = borderRadius ? `border-radius-${borderRadius}` : null

  return `${shadowValue} ${circularValue} ${borderRadiusValue}`
}
</script>

<template>
  <div class="avatar" :class="getSize(size)">
    <img :src="image" :alt="alt" :class="[getClasses(shadow, circular, borderRadius)]">
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ArgonAvatar',
})

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

const getSize = (size?: Props['size']) => (size ? `avatar-${size}` : null)

function getClasses(shadow?: Props['shadow'], circular?: Props['circular'], borderRadius?: Props['borderRadius']) {
  let shadowValue, circularValue, borderRadiusValue

  if (shadow) {
    shadowValue = shadow === 'regular' ? 'shadow' : `shadow-${shadow}`
  }
  else {
    shadowValue = null
  }

  circularValue = circular ? 'rounded-circle' : null

  borderRadiusValue = borderRadius ? `border-radius-${borderRadius}` : null

  return `${shadowValue} ${circularValue} ${borderRadiusValue}`
}
</script>

<template>
  <div class="avatar" :class="getSize(size)">
    <img :src="image" :alt="alt" :class="[getClasses(shadow, circular, borderRadius)]">
  </div>
</template>

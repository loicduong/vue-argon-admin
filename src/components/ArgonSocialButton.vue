<script setup lang="ts">
defineOptions({
  name: 'ArgonSocialButton',
})

interface Props {
  icon: string
  iconOnly: string
  socialBtn: string
  rounded?: boolean
  size?: string
}

withDefaults(defineProps<Props>(), {
  rounded: false,
  size: 'default',
})

function getClasses(iconOnly: Props['iconOnly'], socialBtn: Props['socialBtn'], rounded?: Props['rounded'], size?: Props['size']) {
  let iconOnlyValue, socialBtnValue, roundedValue, sizeValue

  iconOnlyValue = iconOnly ? 'btn-icon-only' : null

  socialBtnValue = socialBtn ? `btn-${socialBtn}` : null

  roundedValue = rounded ? 'rounded-circle' : null

  sizeValue = size ? `btn-${size}` : null

  return `${iconOnlyValue} ${socialBtnValue} ${roundedValue} ${sizeValue}`
}

function getIcon(icon: Props['icon']) {
  return icon || null
}
</script>

<template>
  <button type="button" class="btn" :class="getClasses(iconOnly, socialBtn, rounded, size)">
    <span class="btn-inner--icon">
      <i :class="getIcon(icon)" />
    </span>
    <span class="btn-inner--text">
      &nbsp;
      <slot />
    </span>
  </button>
</template>

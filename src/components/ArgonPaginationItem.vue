<script setup lang="ts">
defineOptions({
  name: 'ArgonPaginationItem',
})

interface Props {
  label?: string
  active?: boolean
  disabled?: boolean
  prev?: boolean
  next?: boolean
}

withDefaults(defineProps<Props>(), {
  label: '',
  active: false,
  disabled: false,
  prev: false,
  next: false,
})

function getClasses(active?: Props['active'], disabled?: Props['disabled']) {
  let activeValue, disabledValue

  activeValue = active ? 'active' : null
  disabledValue = disabled ? 'disabled' : null

  return `${activeValue} ${disabledValue}`
}
</script>

<template>
  <li class="page-item" :class="getClasses(active, disabled)">
    <a class="page-link" href="javascript:;">
      {{ prev || next ? null : label }}
      <i v-if="prev" class="fa fa-angle-left" />
      <i v-if="next" class="fa fa-angle-right" />
    </a>
  </li>
</template>

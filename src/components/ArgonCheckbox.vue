<script setup lang="ts">
defineOptions({
  name: 'ArgonCheckbox',
})

interface Props {
  name?: string
  id?: string
  checked?: boolean
}

withDefaults(defineProps<Props>(), {
  name: '',
  id: '',
  checked: false,
})
</script>

<template>
  <div class="form-check">
    <input :id="id" class="form-check-input" type="checkbox" :name="name" :checked="checked">
    <label :for="id" class="custom-control-label" :class="$attrs.class">
      <slot />
    </label>
  </div>
</template>

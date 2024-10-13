<script setup lang="ts">
interface Props {
  name: string
  id: string
  checked?: boolean
  labelClass?: string
  inputClass?: string
}

withDefaults(defineProps<Props>(), {
  checked: false,
  labelClass: '',
  inputClass: '',
})
</script>

<template>
  <div class="form-check form-switch ps-0">
    <input :id="id" class="form-check-input ms-0" :class="inputClass" type="checkbox" :name="name" :checked="checked">
    <label class="form-check-label" :class="labelClass" :for="id">
      <slot />
    </label>
  </div>
</template>

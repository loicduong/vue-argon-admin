<script setup lang="ts">
interface Props {
  name: string
  id: string
  checked?: boolean
}

withDefaults(defineProps<Props>(), {
  checked: false,
})
</script>

<template>
  <div class="form-check">
    <input :id="id" class="form-check-input" type="radio" :name="name" :checked="checked">
    <label class="custom-control-label" :for="id">
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: string
  placeholder?: string
  rows?: number
}

withDefaults(defineProps<Props>(), {
  placeholder: '',
  rows: 5,
})
</script>

<template>
  <div class="form-group">
    <label :for="id">
      <slot />
    </label>
    <textarea :id="id" class="form-control" :rows="rows" :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: string
  success?: boolean
  error?: boolean
  icon?: string
  iconDir?: string
  name?: string
  id?: string
  modelValue?: string
  placeholder?: string
  type?: string
  isRequired?: boolean
}

withDefaults(defineProps<Props>(), {
  size: 'default',
  success: false,
  error: false,
  icon: '',
  iconDir: '',
  name: '',
  id: '',
  modelValue: '',
  placeholder: '',
  type: 'text',
  isRequired: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function getClasses(size?: string, success?: boolean, error?: boolean) {
  let isValidValue

  const sizeValue = size ? `form-control-${size}` : null

  if (error) {
    isValidValue = 'is-invalid'
  }
  else if (success) {
    isValidValue = 'is-valid'
  }
  else {
    isValidValue = ''
  }

  return `${sizeValue} ${isValidValue}`
}
const getIcon = (icon?: string) => (icon || null)
const hasIcon = (icon?: string) => (icon ? 'input-group' : null)
</script>

<template>
  <div class="form-group">
    <div :class="hasIcon(icon)">
      <span v-if="iconDir === 'left'" class="input-group-text">
        <i :class="getIcon(icon)" />
      </span>
      <input
        :id="id"
        :type="type"
        class="form-control"
        :class="getClasses(size, success, error)"
        :name="name"
        :value="modelValue"
        :placeholder="placeholder"
        :isRequired="isRequired"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      >
      <span v-if="iconDir === 'right'" class="input-group-text">
        <i :class="getIcon(icon)" />
      </span>
    </div>
  </div>
</template>

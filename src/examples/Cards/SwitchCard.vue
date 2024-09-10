<script setup lang="ts">
defineOptions({
  name: 'SwitchCard',
})

interface Props {
  state?: string
  stateText?: string
  stateDescription?: string
  isChecked?: boolean
  classCustom?: string
}

defineProps<Props>()
</script>

<template>
  <div class="card h-100">
    <div class="card-body">
      <div class="mb-4 d-flex">
        <p class="mb-0">
          {{ state }}
        </p>
        <div class="form-check form-switch ms-auto">
          <input id="flexSwitchCheckHumidity" class="form-check-input" type="checkbox" :checked="isChecked">
        </div>
      </div>
      <slot name="icon" />
      <p class="mb-0 font-weight-bold" :class="classCustom">
        {{ stateText }}
      </p>
      <span class="text-xs"> {{ stateDescription }} </span>
    </div>
  </div>
</template>

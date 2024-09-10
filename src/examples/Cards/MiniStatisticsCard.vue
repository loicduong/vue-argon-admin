<script setup lang="ts">
defineOptions({
  name: 'MiniStatisticsCard',
})

interface Props {
  rowReverse?: boolean
  title: string | { text: string, color: string }
  description?: string
  value: string | number | { text: string | number, color: string }
  percentage?: string | { value?: string, color: string }
  icon?: string | { component?: string, background: string, shape?: string }
  classContent?: string
}

withDefaults(defineProps<Props>(), {
  rowReverse: false,
  description: '',
  percentage: () => ({ color: 'success' }),
  icon: () => ({ background: 'bg-white', shape: ' border-radius-md' }),
  classContent: '',
})
</script>

<template>
  <div class="mb-3 card">
    <div class="p-3 card-body">
      <div class="d-flex" :class="rowReverse ? '' : 'flex-row-reverse justify-content-between'">
        <div
          class="text-center shadow icon icon-shape"
          :class="[
            typeof icon === 'object'
              ? `${icon.background} ${icon.shape}`
              : 'border-radius-md',
            rowReverse ? 'me-2' : '',
          ]"
        >
          <i class="text-lg opacity-10" :class="typeof icon === 'string' ? icon : icon.component" aria-hidden="true" />
        </div>
        <div :class="classContent">
          <div class="numbers">
            <p
              class="mb-0 text-sm text-uppercase font-weight-bold"
              :class="typeof title === 'object' ? title.color : ''"
            >
              {{ typeof title === "string" ? title : title.text }}
            </p>
            <h5 :class="`mb-0 font-weight-bolder ${typeof value === 'object' ? value.color : ''}`">
              {{
                (value && typeof value === "string")
                  || (value && typeof value === "number")
                  ? value
                  : (typeof value === "object" && value.text)
              }}
              <span v-if="percentage && typeof percentage === 'string'" class="text-sm font-weight-bolder">
                {{ percentage }}
              </span>
              <span
                v-if="percentage && typeof percentage === 'object'"
                :class="`text-sm font-weight-bolder text-${percentage.color}`"
              >
                {{ percentage.value }}
              </span>
            </h5>
            <p v-if="description" class="mt-2 mb-0" v-html="description" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

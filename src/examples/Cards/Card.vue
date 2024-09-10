<script setup lang="ts">
import { useThemeStore } from '@/store'
import { ref } from 'vue'

defineOptions({
  name: 'Card',
})

interface Props {
  directionReverse?: boolean
  title: string
  detail: string
  titleColor?: string
  value: string
  valueColor?: string
  percentage?: string
  iconClass: string
  percentageColor?: string
  iconBackground?: string
  contentClass?: string
}

withDefaults(defineProps<Props>(), {
  percentageColor: 'text-success',
  iconBackground: 'bg-white',
})

const store = useThemeStore()

const reverseDirection = ref('flex-row-reverse justify-content-between')
</script>

<template>
  <div class="mb-4 card">
    <div class="p-3 card-body">
      <div class="d-flex" :class="directionReverse ? reverseDirection : ''">
        <div>
          <div
            class="text-center icon icon-shape"
            :class="`${iconBackground} ${store.isRTL ? 'border-radius-md' : 'border-radius-2xl'}`"
          >
            <i class="text-lg opacity-10" :class="iconClass" aria-hidden="true" />
          </div>
        </div>
        <div :class="contentClass">
          <div v-if="store.isRTL" class="numbers">
            <p class="mb-0 text-sm text-uppercase font-weight-bold" :class="titleColor">
              {{ title }}
            </p>
            <h5 class="font-weight-bolder" :class="valueColor">
              {{ value }}
              <span class="text-sm" :class="percentageColor">{{ percentage }}</span>
              <span class="font-weight-light text-sm"> {{ detail }}</span>
            </h5>
          </div>
          <div v-else class="numbers">
            <p class="mb-0 text-sm text-uppercase font-weight-bold" :class="titleColor">
              {{ title }}
            </p>
            <h5 class="font-weight-bolder" :class="valueColor">
              {{ value }}
            </h5>
            <span class="text-sm" :class="percentageColor">{{ percentage }}</span>
            {{ detail }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

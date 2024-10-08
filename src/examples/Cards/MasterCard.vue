<script setup lang="ts">
import ArgonAvatar from '@/components/ArgonAvatar.vue'
import { useThemeStore } from '@/store/modules/theme'
import { computed } from 'vue'
import img1 from '../../assets/img/logos/mastercard.png'

defineOptions({
  name: 'MasterCard',
})

interface Props {
  card?: {
    type?: Record<string, unknown>
    number: string
    holderName: string
    expiryDate: string
    holderText: string
    expiryText: string
    background: string
  }
}

withDefaults(defineProps<Props>(), {
  card: () => ({
    number: '4562 1122 4594 7852',
    holderName: 'Jack Peterson',
    expiryDate: '11/22',
    holderText: 'Card Holder',
    expiryText: 'Expires',
    background: 'dark',
  }),
})

const store = useThemeStore()

const isRTL = computed(() => store.isRTL)

const backgroundImage = computed(() => new URL('@/assets/img/card-visa.jpg', import.meta.url).href)
</script>

<template>
  <div class="card bg-transparent shadow-xl">
    <div
      class="overflow-hidden position-relative border-radius-xl"
      :style="{
        backgroundImage: `url(${backgroundImage})`,
      }"
    >
      <span class="mask" :class="`bg-gradient-${card.background}`" />
      <div class="card-body position-relative z-index-1 p-3">
        <i class="fas fa-wifi text-white p-2" aria-hidden="true" />
        <h5 class="text-white mt-4 mb-5 pb-2">
          {{ card.number }}
        </h5>
        <div class="d-flex">
          <div class="d-flex">
            <div :class="isRTL ? 'ms-4' : 'me-4'">
              <p class="text-white text-sm opacity-8 mb-0">
                {{ card.holderText }}
              </p>
              <h6 class="text-white mb-0">
                {{ card.holderName }}
              </h6>
            </div>
            <div>
              <p class="text-white text-sm opacity-8 mb-0">
                {{ card.expiryText }}
              </p>
              <h6 class="text-white mb-0">
                {{ card.expiryDate }}
              </h6>
            </div>
          </div>
          <div class="w-20 d-flex align-items-end justify-content-end" :class="isRTL ? 'me-auto' : 'ms-auto'">
            <ArgonAvatar class="w-60 mt-2" :image="img1" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

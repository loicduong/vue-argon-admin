<script setup lang="ts">
import { useThemeStore } from '@/store/modules/theme'
import { computed } from 'vue'

defineOptions({
  name: 'CategoriesList',
})

interface Props {
  title?: string
  categories: {
    icon: {
      component: string
      background: string
    }
    label: string
    description: string
  }[]
}

withDefaults(defineProps<Props>(), {
  title: 'Categories',
})

const store = useThemeStore()
const isRTL = computed(() => store.isRTL)
</script>

<template>
  <div class="card">
    <div class="p-3 pb-0 card-header">
      <h6 class="mb-0">
        {{ title }}
      </h6>
    </div>
    <div class="p-3 card-body">
      <ul :class="`list-group ${isRTL ? 'pe-0' : ''}`">
        <li
          v-for="(
            { icon: { component, background }, label, description }, index
          ) of categories"
          :key="index"
          :class="`mb-2 border-0 list-group-item d-flex justify-content-between border-radius-lg
          ${isRTL ? 'pe-0' : 'ps-0'}`"
        >
          <div class="d-flex align-items-center">
            <div
              :class="`text-center shadow icon icon-shape icon-sm bg-gradient-${background} ${isRTL ? 'ms-3' : 'me-3'
              }`"
            >
              <i :class="`${component} text-white opacity-10`" />
            </div>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-sm text-dark">
                {{ label }}
              </h6>
              <span class="text-xs" v-html="description" />
            </div>
          </div>
          <div class="d-flex">
            <button class="my-auto btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right">
              <i :class="`ni ${isRTL ? 'ni-bold-left' : 'ni-bold-right'}`" aria-hidden="true" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

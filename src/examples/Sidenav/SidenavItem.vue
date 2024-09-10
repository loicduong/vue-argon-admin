<script setup>
import { useThemeStore } from '@/store'
import { computed } from 'vue'

const store = useThemeStore()
const isRTL = computed(() => store.isRTL)
const sidebarMinimize = () => store.sidebarMinimize()

function minimizeSidebar() {
  if (window.innerWidth < 1200) {
    sidebarMinimize()
  }
}

defineProps({
  to: {
    type: String,
    required: true,
  },
  navText: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <RouterLink :to="to" class="nav-link" @click="minimizeSidebar">
    <div class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center">
      <slot name="icon" />
    </div>
    <span class="nav-link-text" :class="isRTL ? ' me-1' : 'ms-1'">{{
      navText
    }}</span>
  </RouterLink>
</template>

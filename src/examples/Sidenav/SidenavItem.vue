<script setup lang="ts">
import { useMainStore } from '@/store/main'
import { computed } from 'vue'

interface Props {
  to: string
  navText: string
}

defineProps<Props>()

const mainStore = useMainStore()
const isRTL = computed(() => mainStore.isRTL)
const sidebarMinimize = () => mainStore.sidebarMinimize()

function minimizeSidebar() {
  if (window.innerWidth < 1200) {
    sidebarMinimize()
  }
}
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

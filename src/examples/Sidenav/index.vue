<script setup lang="ts">
import logoWhite from '@/assets/img/logo-ct.png'
import logo from '@/assets/img/logo-ct-dark.png'
import { useThemeStore } from '@/store/modules/theme'
import { computed } from 'vue'
import SidenavList from './SidenavList.vue'

defineOptions({
  name: 'Sidenav',
})

const store = useThemeStore()
const isRTL = computed(() => store.isRTL)
const layout = computed(() => store.layout)
const sidebarType = computed(() => store.sidebarType)
const darkMode = computed(() => store.darkMode)
</script>

<template>
  <div
    v-show="layout === 'default'"
    class="min-height-300 position-absolute w-100"
    :class="`${darkMode ? 'bg-transparent' : 'bg-success'}`"
  />

  <aside
    id="sidenav-main"
    class="my-3 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl"
    :class="`${isRTL ? 'me-3 rotate-caret fixed-end' : 'fixed-start ms-3'}
      ${layout === 'landing' ? 'bg-transparent shadow-none' : ' '
    } ${sidebarType}`"
  >
    <div class="sidenav-header">
      <i
        id="iconSidenav"
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
      />

      <RouterLink class="m-0 navbar-brand" to="/">
        <img
          :src="darkMode || sidebarType === 'bg-default' ? logoWhite : logo"
          class="navbar-brand-img h-100"
          alt="main_logo"
        >

        <span class="ms-2 font-weight-bold me-2">Argon Dashboard 2</span>
      </RouterLink>
    </div>

    <hr class="mt-0 horizontal dark">

    <SidenavList />
  </aside>
</template>

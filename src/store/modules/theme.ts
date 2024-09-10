import { SetupStoreId } from '@/constants/enum'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore(SetupStoreId.Theme, () => {
  const hideConfigButton = ref(false)
  const isPinned = ref(false)
  const showConfig = ref(false)
  const sidebarType = ref('bg-white')
  const isRTL = ref(false)
  const mcolor = ref('')
  const darkMode = ref(false)
  const isNavFixed = ref(false)
  const isAbsolute = ref(false)
  const showNavs = ref(true)
  const showSidenav = ref(true)
  const showNavbar = ref(true)
  const showFooter = ref(true)
  const showMain = ref(true)
  const layout = ref('default')
  const imageLayout = ref('')
  const navbarFixed_class = ref('')
  const isTransparent = ref('')

  function toggleConfigurator() {
    showConfig.value = !showConfig.value
  }

  function sidebarMinimize() {
    const sidenav_show = document.querySelector('#app')
    if (isPinned.value) {
      sidenav_show?.classList.add('g-sidenav-hidden')
      sidenav_show?.classList.remove('g-sidenav-pinned')
      isPinned.value = false
    }
    else {
      sidenav_show?.classList.add('g-sidenav-pinned')
      sidenav_show?.classList.remove('g-sidenav-hidden')
      isPinned.value = true
    }
  }

  function navbarFixed() {
    if (isNavFixed.value === false) {
      isNavFixed.value = true
    }
    else {
      isNavFixed.value = false
    }
  }

  return {
    hideConfigButton,
    isPinned,
    showConfig,
    sidebarType,
    isRTL,
    mcolor,
    darkMode,
    isNavFixed,
    isAbsolute,
    showNavs,
    showSidenav,
    showNavbar,
    showFooter,
    showMain,
    layout,
    imageLayout,
    navbarFixed_class,
    isTransparent,
    toggleConfigurator,
    sidebarMinimize,
    navbarFixed,
  }
})

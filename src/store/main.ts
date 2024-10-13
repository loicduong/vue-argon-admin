import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
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

  const isTransparent = ref('')

  const navbarFixedClass = ref('')

  const imageLayout = ref('')

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

  function setSidebarType(payload: string) {
    sidebarType.value = payload
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
    darkMode,
    hideConfigButton,
    imageLayout,
    isAbsolute,
    isNavFixed,
    isPinned,
    isRTL,
    isTransparent,
    layout,
    mcolor,
    navbarFixedClass,
    showConfig,
    showFooter,
    showMain,
    showNavbar,
    showNavs,
    showSidenav,
    sidebarType,
    navbarFixed,
    setSidebarType,
    sidebarMinimize,
    toggleConfigurator,
  }
})

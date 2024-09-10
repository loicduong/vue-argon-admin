<script setup lang="ts">
import Configurator from '@/examples/Configurator.vue'
import AppFooter from '@/examples/Footer.vue'
import Navbar from '@/examples/Navbars/Navbar.vue'
import Sidenav from '@/examples/Sidenav/index.vue'
import { useThemeStore } from '@/store'
import { computed } from 'vue'

const store = useThemeStore()
const isNavFixed = computed(() => store.isNavFixed)
const darkMode = computed(() => store.darkMode)
const isAbsolute = computed(() => store.isAbsolute)
const showSidenav = computed(() => store.showSidenav)
const layout = computed(() => store.layout)
const showNavbar = computed(() => store.showNavbar)
const showFooter = computed(() => store.showFooter)
const showConfig = computed(() => store.showConfig)
const hideConfigButton = computed(() => store.hideConfigButton)
const toggleConfigurator = () => store.toggleConfigurator()

const navClasses = computed(() => {
  return {
    'position-sticky bg-white left-auto top-2 z-index-sticky':
      isNavFixed.value && !darkMode.value,
    'position-sticky bg-default left-auto top-2 z-index-sticky':
      isNavFixed.value && darkMode.value,
    'position-absolute px-4 mx-0 w-100 z-index-2': isAbsolute.value,
    'px-0 mx-4': !isAbsolute.value,
  }
})
</script>

<template>
  <div v-show="layout === 'landing'" class="landing-bg h-100 bg-gradient-primary position-fixed w-100" />

  <Sidenav v-if="showSidenav" />

  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
    <!-- nav -->

    <Navbar v-if="showNavbar" :class="[navClasses]" />

    <RouterView />

    <AppFooter v-show="showFooter" />

    <Configurator :toggle="toggleConfigurator" :class="[showConfig ? 'show' : '', hideConfigButton ? 'd-none' : '']" />
  </main>
</template>

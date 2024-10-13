<!--
=========================================================
* Vue Argon Dashboard 2 - v4.0.0
=========================================================

* Product Page: https://creative-tim.com/product/vue-argon-dashboard
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
-->
<script setup lang="ts">
import Configurator from '@/examples/Configurator.vue'
import AppFooter from '@/examples/Footer.vue'
import Navbar from '@/examples/Navbars/Navbar.vue'
import Sidenav from '@/examples/Sidenav/index.vue'
import { useMainStore } from '@/store/main'
import { computed } from 'vue'

const mainStore = useMainStore()
const isNavFixed = computed(() => mainStore.isNavFixed)
const darkMode = computed(() => mainStore.darkMode)
const isAbsolute = computed(() => mainStore.isAbsolute)
const showSidenav = computed(() => mainStore.showSidenav)
const layout = computed(() => mainStore.layout)
const showNavbar = computed(() => mainStore.showNavbar)
const showFooter = computed(() => mainStore.showFooter)
const showConfig = computed(() => mainStore.showConfig)
const hideConfigButton = computed(() => mainStore.hideConfigButton)
const toggleConfigurator = () => mainStore.toggleConfigurator()

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

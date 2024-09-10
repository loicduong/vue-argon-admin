<script setup lang="ts">
import { useThemeStore } from '@/store'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import SidenavCard from './SidenavCard.vue'
import SidenavItem from './SidenavItem.vue'

defineOptions({
  name: 'SidenavList',
})

const store = useThemeStore()
const isRTL = computed(() => store.isRTL)

function getRoute() {
  const route = useRoute()
  const routeArr = route.path.split('/')
  return routeArr[1]
}
</script>

<template>
  <div id="sidenav-collapse-main" class="collapse navbar-collapse w-auto h-auto h-100">
    <ul class="navbar-nav">
      <li class="nav-item">
        <SidenavItem
          to="/dashboard-default"
          :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :nav-text="isRTL ? 'لوحة القيادة' : 'Dashboard'"
        >
          <template #icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10" />
          </template>
        </SidenavItem>
      </li>

      <li class="nav-item">
        <SidenavItem
          to="/tables"
          :class="getRoute() === 'tables' ? 'active' : ''"
          :nav-text="isRTL ? 'الجداول' : 'Tables'"
        >
          <template #icon>
            <i class="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
          </template>
        </SidenavItem>
      </li>

      <li class="nav-item">
        <SidenavItem
          to="/billing"
          :class="getRoute() === 'billing' ? 'active' : ''"
          :nav-text="isRTL ? 'الفواتیر' : 'Billing'"
        >
          <template #icon>
            <i class="ni ni-credit-card text-success text-sm opacity-10" />
          </template>
        </SidenavItem>
      </li>

      <li class="nav-item">
        <SidenavItem
          to="/virtual-reality"
          :class="getRoute() === 'virtual-reality' ? 'active' : ''"
          :nav-text="isRTL ? 'الواقع الافتراضي' : 'Virtual Reality'"
        >
          <template #icon>
            <i class="ni ni-app text-info text-sm opacity-10" />
          </template>
        </SidenavItem>
      </li>

      <li class="nav-item">
        <SidenavItem to="/rtl-page" :class="getRoute() === 'rtl-page' ? 'active' : ''" nav-text="RTL">
          <template #icon>
            <i class="ni ni-world-2 text-danger text-sm opacity-10" />
          </template>
        </SidenavItem>
      </li>

      <li class="mt-3 nav-item">
        <h6
          v-if="isRTL"
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="isRTL ? 'me-4' : 'ms-2'"
        >
          صفحات المرافق
        </h6>

        <h6 v-else class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6" :class="isRTL ? 'me-4' : 'ms-2'">
          ACCOUNT PAGES
        </h6>
      </li>

      <li class="nav-item">
        <SidenavItem
          to="/profile"
          :class="getRoute() === 'profile' ? 'active' : ''"
          :nav-text="isRTL ? 'حساب تعريفي' : 'Profile'"
        >
          <template #icon>
            <i class="ni ni-single-02 text-dark text-sm opacity-10" />
          </template>
        </SidenavItem>
      </li>

      <li class="nav-item">
        <SidenavItem
          to="/signin"
          :class="getRoute() === 'signin' ? 'active' : ''"
          :nav-text="isRTL ? 'تسجيل الدخول' : 'Sign In'"
        >
          <template #icon>
            <i class="ni ni-single-copy-04 text-danger text-sm opacity-10" />
          </template>
        </SidenavItem>
      </li>

      <li class="nav-item">
        <SidenavItem
          to="/signup"
          :class="getRoute() === 'signup' ? 'active' : ''"
          :nav-text="isRTL ? 'اشتراك' : 'Sign Up'"
        >
          <template #icon>
            <i class="ni ni-collection text-info text-sm opacity-10" />
          </template>
        </SidenavItem>
      </li>
    </ul>
  </div>

  <div class="pt-3 mx-3 mt-3 sidenav-footer">
    <SidenavCard
      :card="{
        title: 'Need Help?',
        description: 'Please check our docs',
        links: [
          {
            label: 'Documentation',
            route:
              'https://www.creative-tim.com/learning-lab/vue/overview/argon-dashboard/',
            color: 'dark',
          },
          {
            label: 'Buy now',
            route:
              'https://www.creative-tim.com/product/vue-argon-dashboard-pro?ref=vadp',
            color: 'success',
          },
        ],
      }"
    />
  </div>
</template>

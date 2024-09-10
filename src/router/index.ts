import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import Billing from '../views/Billing.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import RTL from '../views/Rtl.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Tables from '../views/Tables.vue'
import VirtualReality from '../views/VirtualReality.vue'

const routes = [
  {
    path: '/',
    name: '/',
    redirect: '/dashboard-default',
  },
  {
    path: '/dashboard-default',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables,
  },
  {
    path: '/billing',
    name: 'Billing',
    component: Billing,
  },
  {
    path: '/virtual-reality',
    name: 'Virtual Reality',
    component: VirtualReality,
  },
  {
    path: '/rtl-page',
    name: 'RTL',
    component: RTL,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
  linkActiveClass: 'active',
})

/** Setup Vue Router */
export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}

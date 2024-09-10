import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/nucleo-icons.css'
import './assets/css/nucleo-svg.css'
import './assets/js/nav-pills.js'
import './assets/scss/argon-dashboard.scss'

const appInstance = createApp(App)
appInstance.use(createPinia())
appInstance.use(router)
appInstance.mount('#app')

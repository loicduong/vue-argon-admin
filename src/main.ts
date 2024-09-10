import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import './assets/css/nucleo-icons.css'
import './assets/css/nucleo-svg.css'
import './assets/js/nav-pills.js'
import './assets/scss/argon-dashboard.scss'

async function setupApp() {
  const app = createApp(App)

  setupStore(app)

  await setupRouter(app)

  app.mount('#app')
}

setupApp()

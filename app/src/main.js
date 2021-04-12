import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { auth } from '@/includes/firebase'
import router from './router'
import store from './store'
import i18n from '@/includes/i18n'

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(i18n).use(store).use(router).mount('#app')
  }
})



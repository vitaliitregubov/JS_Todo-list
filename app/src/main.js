import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { auth } from '@/includes/firebase'
import router from './router'
import store from './store'

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(store).use(router).mount('#app')
  }
})



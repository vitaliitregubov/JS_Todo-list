import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { auth } from './includes/firebase'

let app;

// Loading Firebase first to check if a user has been logged in
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(store).use(router).mount('#app')
  }
});



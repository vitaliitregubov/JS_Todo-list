import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home')
  },
  {
    path: '/account',
    name: 'Account',
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "Account" */ '@/views/Account')
  },
  {
    path: '/:catchAll(.*)*',
    name: 'PageNotFound',
    component: () => import(/* webpackChunkName: "PageNotFound" */ '@/views/PageNotFound')
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.matched.some(item => item.meta.requiresAuth)) {
    next()
    return
  } 

  if(store.state.userLoggedIn) {
    next()
  } else {
    next({ name: 'Home' })
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "Account" */ '@/views/Cart')
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    beforeEnter: (to, from, next) => {
      if (!store.state.products.find(item => Number(item.id) === Number(to.params.id))) {
        next({ name: 'PageNotFound' })
      } else {
        next()
      }
    },
    component: () => import(/* webpachChunkName: "ProductDetails" */'@/views/ProductDetails')
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

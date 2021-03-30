import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'


const routes = [
  {
    path: '/',
    name: 'App',
    component: () => import('@/views/Home')
  },
  {
    path: '/account',
    name: 'account',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/Account.vue')
  },
  {
    path: '/manage',
    redirect: { name: 'account' }
  },
  {
    path: '/:catchAll(./*)*',
    redirect: { name: 'App' },
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  
  if (!to.matched.some(record => record.meta.requiresAuth)) {
    next()
    return
  }

  if (store.state.userLoggedIn) {
    next()
  } else {
    next({ name: 'App' })
  }
})

export default router

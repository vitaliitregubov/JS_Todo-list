import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/',
    redirect: {
      name: 'login',
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    // childred: [
    //   {
    //     path: '/details',
    //     name: 'details',
    //     props: true,
    //     component: () => import('../views/Details.vue')
    //   },
    // ]
  },
  {
    path: '/details/:id',
    name: 'details',
    props: true,
    component: () => import('../views/Details.vue')
  },
  {
    path: '/authorized',
    name: 'authorized',
    beforeEnter: (to, from, next) => {
      if(!store.state.authenticated) {
        next('/')
      } else {
        next()
      }
    },
    component: () => import('../views/Authorized.vue')
  },
  {
    path: '/:catchAll()',
    component: () => import('../views/NotFound.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

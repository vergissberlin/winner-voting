import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StyleGuide from '../views/StyleGuide.vue'
import Create from '../views/Create.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'Create voting',
    component: Create
  },
  {
    path: '/style-guide',
    name: 'StyleGuide',
    component: StyleGuide
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeKg from '../views/HomeKg'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeKg
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/property',
    name: 'Property',
    component: () => import(/* webpackChunkName: "about" */ '../views/PropertyView.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/BlogView.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

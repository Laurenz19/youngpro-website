import { createRouter, createWebHistory } from 'vue-router'
import Front_Office from '../views/front-office/Index.vue'
import Back_Office from '../views/back-office/Index.vue'

const routes = [
  {
    path: '/',
    name: 'Front',
    component: Front_Office
  },
  {
    path: '/admin',
    name: 'Back',
    component: Back_Office
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

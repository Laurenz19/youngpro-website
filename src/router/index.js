import { createRouter, createWebHistory } from 'vue-router'
import Front_Office from '../views/front-office/Index.vue'
import Back_Office from '../views/back-office/Index.vue'

/* Back-Office Components */
import Article from '../views/back-office/Article.vue'
import Dashboard from '../views/back-office/Dashboard.vue'
import Member from '../views/back-office/Member.vue'
import Profile from '../views/back-office/Profile.vue'
import SettingUp from '../views/back-office/SettingUp.vue'
import User from '../views/back-office/User.vue'

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
  },
  {
    path: '/admin/article',
    name: 'Article',
    component: Article
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/admin/member',
    name: 'Member',
    component: Member
  },
  {
    path: '/admin/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/admin/setting-up',
    name: 'Setting-up',
    component: SettingUp
  },
  {
    path: '/admin/user',
    name: 'User',
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

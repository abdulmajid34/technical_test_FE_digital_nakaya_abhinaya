import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bookmarks from '@/views/Bookmarks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/bookmarks',
      name: 'Bookmarks',
      component: Bookmarks,
    },
  ],
})

export default router

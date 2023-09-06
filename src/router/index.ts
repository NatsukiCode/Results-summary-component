import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//If you want to add extra pages, you will need to define them here in routes! Just copy and existing one and change the names!
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
    // For example:
    // {
    //   path: '/yourNewComponent',
    //   name: 'yourNewComponent',
    //   component: YourNewComponent
    // },
  ]
})

export default router

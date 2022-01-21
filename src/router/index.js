import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contest from '../views/Contest.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contest',
    name: 'Contest',
    component: Contest
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

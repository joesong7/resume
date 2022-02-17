import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contest from '../views/Contest.vue'
import Portfolio from '../views/Portfolio.vue'


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
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

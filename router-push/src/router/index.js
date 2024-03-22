import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import ('../views/Home.vue')
const About = () => import ('../views/About.vue')
const Back = () => import ('../views/Back.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/back',
      name: 'Back',
      component: Back
    }
  ]
})

export default router

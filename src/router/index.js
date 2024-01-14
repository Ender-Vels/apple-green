import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import RegisterUser from '../components/RegisterUser.vue'
import AutorizeSites from '../components/AutorizeSites.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path:'/Register',
      name:'Register',
      component: RegisterUser,
    },
    {
      path:'/Autorize',
      name:'Autorize',
      component: AutorizeSites,
    }
    
    
  ]
})

export default router

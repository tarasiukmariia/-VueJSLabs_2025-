import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }), 
  linkActiveClass: 'active-link',     
  routes: [
    {
      path: '/',
      redirect: '/login',
      meta: { public: true }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { public: true }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { public: true }
    }
  ]
})

export default router
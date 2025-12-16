import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AdminLayout from '../views/AdminLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  linkActiveClass: 'active-link',
  routes: [
    { path: '/', redirect: '/login', meta: { public: true } },
    { path: '/login', name: 'login', component: LoginView, meta: { public: true } },
    { path: '/register', name: 'register', component: RegisterView, meta: { public: true } },
    
    {
      path: '/admin',
      component: AdminLayout,
      meta: { requiresAuth: true }, 
      children: [
        {
          path: 'dashboard',
          component: () => import('../views/DashboardView.vue') 
        },
        {
          path: 'reports',
          component: () => import('../views/ReportsPage.vue') 
        },
        {
          path: 'users',
          component: () => import('../views/UsersView.vue') 
        },
        {
          path: 'users/:id',
          component: () => import('../views/UserDetails.vue') 
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
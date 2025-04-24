// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { auth } from 'src/boot/firebase'

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Garde de navigation (auth obligatoire)
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router

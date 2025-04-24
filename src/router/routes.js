// src/router/routes.js
import HomePage from 'src/pages/HomePage.vue'
import LoginPage from 'src/pages/LoginVue.vue'
import InscriptionPage from 'src/pages/InscriptionVue.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: InscriptionPage
  }
]

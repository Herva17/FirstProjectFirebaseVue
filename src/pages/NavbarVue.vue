<!-- src/components/Navbar.vue -->
<template>
  <div>
    <button @click="logout">Déconnexion</button>
  </div>
</template>

<script>
import { logout } from 'src/services/auth'

export default {
  methods: {
    async logout() {
      try {
        await logout()
        this.$router.push('/login') // Rediriger vers la page de connexion après déconnexion
      } catch (error) {
        alert(error.message)
      }
    }
  }
}
</script>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/UserStore'

const userStore = useUserStore()
userStore.loadUsers()
const registeredUsers = userStore.getUsers
// const found = ref({})

const whoIsLogging = {
  nombre: "",
  password: ""
}
const validateUser = (whoIsLogging) => {
  const found = registeredUsers.find((registeredUser) => (registeredUser.nombre == whoIsLogging.nombre && registeredUser.password == whoIsLogging.password))
  if (found) {
    userStore.setActiveUser(found.nombre)
  }
}
</script>

<template>
  <div>
    <h1>Landing Page</h1>
    <h3>Bienvenido, {{ userStore.getActiveUser }}</h3>
    <div class="grid gap-4 mt-10 w-full place-content-center">
      <input type="text" placeholder="nombre" v-model="whoIsLogging.nombre" />
      <input type="password" placeholder="contraseña" v-model="whoIsLogging.password" />
      <button @click="validateUser(whoIsLogging)">Iniciar sesión</button>
      <button>Registrarse</button>
      <button>Cerrar sesión</button>
    </div>
  </div>
</template>

<style scoped>

</style>
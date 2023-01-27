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
const checkUser = (whoIsLogging) => {
  console.log("1/5: registeredUsers: ", registeredUsers)
  console.log("2/5: whoIsLogging: ", whoIsLogging)
  const found = registeredUsers.find((registeredUser) => (registeredUser.nombre == whoIsLogging.nombre && registeredUser.password == whoIsLogging.password))
  if (found) {
    console.log("3/5: Nombre usuario activo es: ", userStore.activeUser)
    userStore.setActiveUser(found.nombre)
    console.log("4/5: Nombre usuario activo es: ", userStore.activeUser)
    console.log("5/5: found es: ", found)
  }
}
</script>

<template>
  <div>
    <h1>Landing Page</h1>
    <h3>Bienvenido, {{ userStore.activeUser }}</h3>
    <div class="grid gap-4 mt-10 w-full place-content-center">
      <input type="text" placeholder="nombre" v-model="whoIsLogging.nombre" />
      <input type="password" placeholder="contraseña" v-model="whoIsLogging.password" />
      <button @click="checkUser(whoIsLogging)">Iniciar sesión</button>
      <button>Registrarse</button>
      <button>Cerrar sesión</button>
    </div>
  </div>
</template>

<style scoped>

</style>
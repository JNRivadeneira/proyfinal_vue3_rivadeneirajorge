<script setup>
import { useUserStore } from '../../stores/UserStore';

const userStore = useUserStore()
userStore.loadUsers()
const registeredUsers = userStore.getUsers
// const found = ref({})

const whoIsLogging = {
  email: "",
  password: ""
}
const validateUser = (whoIsLogging) => {
  console.log("Se presionó el botón")  
  const found = registeredUsers.find((registeredUser) => (registeredUser.email == whoIsLogging.email && registeredUser.password == whoIsLogging.password))
  if (found) {
    userStore.setActiveUser(found.nombre)
  }
}
</script>

<template>
  <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div class="w-full p-6 m-auto bg-white rounded shadow-lg ring-2 ring-purple-800/50 lg:max-w-md">
        <h1 class="text-3xl font-semibold text-center text-purple-700">LOGIN</h1>

        <form @submit.prevent="validateUser(whoIsLogging)" class="mt-6">
            <div>
                <label for="email" class="block text-sm text-gray-800">Email</label>
                <input
                    v-model="whoIsLogging.email" 
                    type="email"
                    class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>
            <div class="mt-4">
                <div>
                    <label for="password" class="block text-sm text-gray-800">Password</label>
                    <input
                    v-model="whoIsLogging.password" 
                        type="password"
                        class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                </div>
                <a href="#" class="text-xs text-gray-600 hover:underline">Forget Password?</a>
                <div class="mt-6">
                    <button
                        
                        class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Login
                    </button>
                </div>
            </div>
        </form>
        <p class="mt-8 text-xs font-light text-center text-gray-700"> Si aún no eres cliente <a href="#"
                class="font-medium text-purple-600 hover:underline">Registrate</a></p>
    </div>
</div>
</template>

<style scoped>
</style>
<script setup>
import { useUserStore } from '../../stores/UserStore'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const goToRegistroView = () => { router.push("/registro") }
userStore.fill()

const whoIsLogging = {
  email: "",
  password: ""
}
const validateUser = (whoIsLogging) => {
  const registeredUsers = userStore.getUsers
  const found = registeredUsers.find((registeredUser) => (registeredUser.email == whoIsLogging.email && registeredUser.password == whoIsLogging.password))
  if (found) {
    userStore.setActiveUser(found.nombre)
  }
}
</script>

<template>
  <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div class="max-w-lg p-6 m-auto bg-white rounded shadow-lg ring-2 ring-purple-800/50">
      <h1 class="text-3xl font-semibold text-center text-purple-700">
        LOGIN
      </h1>

      <form
        class="mt-6"
        @submit.prevent="validateUser(whoIsLogging)"
      >
        <div>
          <label
            for="email"
            class="block text-sm text-gray-800"
          >Email</label>
          <input
            v-model="whoIsLogging.email" 
            type="email"
            class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          >
        </div>
        <div class="mt-4">
          <div>
            <label
              for="password"
              class="block text-sm text-gray-800"
            >Password</label>
            <input
              v-model="whoIsLogging.password" 
              type="password"
              class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            >
          </div>
          <!-- <a href="#" class="text-xs text-gray-600 hover:underline">Forget Password?</a> -->
          <div class="mt-6">
            <button
                        
              class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <p class="mt-8 text-xs font-light text-center text-gray-700">
        Si aún no eres cliente <span
          class="cursor-pointer font-medium text-purple-600 hover:underline"
          @click="goToRegistroView"
        >Registrate</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
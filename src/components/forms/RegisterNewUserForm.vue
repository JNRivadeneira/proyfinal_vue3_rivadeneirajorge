<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/UserStore';

const router = useRouter()
const userStore = useUserStore()
const newUser = ref({})

userStore.fill()

const loadData = () => { console.log("Envía datos", newUser.value) }
const goToLoginView = () => { router.push("/login") }
</script>

<template>
  <div class="relative flex flex-col justify-center min-h-screen">
    <div class="max-w-lg p-6 m-auto bg-white rounded shadow-lg ring-2 ring-purple-800/50">
        <h1 class="text-3xl font-semibold text-center text-purple-700">REGISTRATE</h1>

        <form @submit.prevent="userStore.addNewUser(newUser)" class="mt-6">
            <div>
                <label for="nombre" class="block text-sm text-gray-800">Nombre</label>
                <input
                  v-model="newUser.nombre"
                  type="text"
                  name="nombre"
                  class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>
            <div>
                <label for="apellido" class="block text-sm text-gray-800">Apellido</label>
                <input
                  v-model="newUser.apellido"
                  type="text"
                  name="apellido"
                  class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>
            <div>
                <label for="email" class="block text-sm text-gray-800">Email</label>
                <input
                  v-model="newUser.email"
                  type="email"
                  name="email"
                  class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>
            <div class="mt-4">
                <div>
                    <label for="password" class="block text-sm text-gray-800">Contraseña</label>
                    <input
                      v-model="newUser.password"
                      type="password"
                      name="password"
                      class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                </div>
                <div>
                    <label for="repite_password" class="block text-sm text-gray-800">Repite Contraseña</label>
                    <input 
                      type="password"
                      name="repite_password"
                      class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                </div>
                
                <div class="mt-6">
                    <button
                    type="submit"
                        class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Enviar
                    </button>
                </div>
            </div>
        </form>
        <p class="mt-8 text-xs font-light text-center text-gray-700"> Ya tienes cuenta? <span @click="goToLoginView" 
                class="cursor-pointer font-medium text-purple-600 hover:underline">Login</span></p>
    </div>
</div>
</template>

<style scoped>
</style>
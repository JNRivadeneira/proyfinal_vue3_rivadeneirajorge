<script setup>
</script>

<template>
  <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div class="w-full p-6 m-auto bg-white rounded shadow-lg ring-2 ring-purple-800/50 lg:max-w-md">
        <h1 class="text-3xl font-semibold text-center text-purple-700">REGISTRATE</h1>

        <form class="mt-6">
            <div>
                <label for="nombre" class="block text-sm text-gray-800">Nombre</label>
                <input 
                  type="text"
                  name="nombre"
                  class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>
            <div>
                <label for="apellido" class="block text-sm text-gray-800">Apellido</label>
                <input 
                  type="text"
                  name="apellido"
                  class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>
            <div>
                <label for="email" class="block text-sm text-gray-800">Email</label>
                <input 
                  type="email"
                  name="email"
                  class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>
            <div class="mt-4">
                <div>
                    <label for="password" class="block text-sm text-gray-800">Password</label>
                    <input 
                      type="password"
                      name="password"
                      class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                </div>
                <div>
                    <label for="repite_password" class="block text-sm text-gray-800">Repite Password</label>
                    <input 
                      type="password"
                      name="repite_password"
                      class="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                </div>
                
                <div class="mt-6">
                    <button
                        class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Enviar
                    </button>
                </div>
            </div>
        </form>
        <p class="mt-8 text-xs font-light text-center text-gray-700"> Ya tienes cuenta? <a href="#"
                class="font-medium text-purple-600 hover:underline">Login</a></p>
    </div>
</div>
</template>

<style scoped>
</style>
<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '../../stores/UserStore';
  import { useProductStore } from '../../stores/ProductStore';
  import { Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue'

  const router = useRouter()
  const userStore = useUserStore()
  const productStore = useProductStore()

  const newProduct = ref({})

  userStore.fill()
  productStore.fill()

  // const goToLoginView = () => { router.push("/") }
</script>

<template>
  <div class="relative flex flex-col justify-center min-h-screen">
    <div class="max-w-lg w-full p-6 m-auto bg-white rounded shadow-lg ring-2 ring-purple-800/50">
      <h1 class="text-3xl font-semibold text-center text-purple-700">NUEVO PRODUCTO</h1>

      <form @submit.prevent="" class="flex flex-col p-2 gap-3 mt-6">

        <div class="flex items-center justify-center w-full">
          <label for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to
                  upload</span> or drag and drop</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>

        <div id="title_input" class="flex">
          <dropdown text="Bottom">
            <list-group>
              <list-group-item>
                <template #prefix>
                  <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"></path>
                  </svg>
                </template>
                Profile
              </list-group-item>
              <list-group-item>
                <template #prefix>
                  <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z">
                    </path>
                  </svg>
                </template>
                Settings
              </list-group-item>
              <list-group-item>
                <template #prefix>
                  <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                      clip-rule="evenodd"></path>
                  </svg>
                </template>
                Messages
              </list-group-item>
              <list-group-item>
                <template #prefix>
                  <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                      clip-rule="evenodd"></path>
                  </svg>
                </template>
                Download
              </list-group-item>
            </list-group>
          </dropdown>

          <div id="tit" class="relative w-full">
            <input type="text" id="new_product_title"
              class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Título del producto" required>
          </div>
        </div>

        <div>
          <textarea id="new_product_description" rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Escribe la descripción aquí..."></textarea>
        </div>

        <div>
          <input type="text" id="new_product_price"
            class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Precio del producto" required>
        </div>

        <div class="mt-4">

          <div class="mt-6">
            <button type="submit"
              class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Agregar
            </button>
          </div>
        </div>
      </form>
      <!-- <p class="mt-8 text-xs font-light text-center text-gray-700"> Ya tienes cuenta? <span
                    @click="goToLoginView()"
                    class="cursor-pointer font-medium text-purple-600 hover:underline">Login</span></p> -->
    </div>
  </div>
</template>

<style scoped>

</style>
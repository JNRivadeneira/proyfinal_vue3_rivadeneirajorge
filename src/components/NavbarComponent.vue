<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/UserStore';
import { useCartStore } from '../stores/CartStore';
import CartWidget from './CartWidget.vue';
import { Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue'

const userStore = useUserStore()
const cartStore = useCartStore()
const router = useRouter()

function logOut() {
  console.log(`${userStore.getActiveUser} ha cerrado sesión!`)
  userStore.setActiveUser(null)
  cartStore.removeAllItems()
  router.push("/")
}

function prueba() {
  console.log(cartStore.getItemsCount)
  console.log(cartStore.isEmpty)
}

</script>

<template>
  <div
    id="navbar_container"
    class="flex items-center justify-between h-10 lg:h-20 bg-slate-400"
  >
    <!-- <nav> -->
    <div
      id="top_left_menu"
      class="flex items-center ml-2"
    >
      <div
        id="logo"
        class="flex items-center shrink-0 text-contrast-st"
      >
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          />
        </svg>
        <span class="font-semibold text-xl tracking-tight">Proyecto</span>
      </div>
      <div
        id="router_links_group"
        class="hidden lg:flex lg:ml-5"
      >
        <div id="router_links_entries">
          <RouterLink
            to="/"
            class="p-2 text-terciary hover:text-primary"
          >
            Home
          </RouterLink>
          <!-- <RouterLink to="/about" class="p-2 text-terciary hover:text-primary">
            About
          </RouterLink>
          <RouterLink to="/prueba" class="p-2 text-terciary hover:text-primary">
            Prueba
          </RouterLink>
          <RouterLink to="/menu" class="p-2 text-terciary hover:text-primary">
            Menu
          </RouterLink> -->
          
          <RouterLink
            to="/menu/entradas"
            class="p-2 text-terciary hover:text-primary"
          >
            Entradas
          </RouterLink>
          <RouterLink
            to="/menu/carnes"
            class="p-2 text-terciary hover:text-primary"
          >
            Carnes
          </RouterLink>
          <RouterLink
            to="/menu/ensaladas"
            class="p-2 text-terciary hover:text-primary"
          >
            Ensaladas
          </RouterLink>
          <RouterLink
            to="/menu/pastas"
            class="p-2 text-terciary hover:text-primary"
          >
            Pastas
          </RouterLink>
          <RouterLink
            to="/menu/veganos"
            class="p-2 text-terciary hover:text-primary"
          >
            Veganos
          </RouterLink>
          <RouterLink
            to="/menu/pescadosmariscos"
            class="p-2 text-terciary hover:text-primary"
          >
            Pescados/Mariscos
          </RouterLink>
          <!-- <RouterLink to="/registro" class="p-2 text-terciary hover:text-primary">
            Registro
          </RouterLink> -->
          <RouterLink
            v-if="userStore.getActiveUser == 'admin'"
            to="/newproduct"
            class="p-2 text-terciary hover:text-primary"
          >
            Nuevo Producto
          </RouterLink>
          <RouterLink
            to="/newproduct"
            class="p-2 text-terciary hover:text-primary"
          >
            Nuevo Producto
          </RouterLink>
        </div>
      </div>
    </div>
    <div
      id="top_right_menu"
      class="flex items-center justify-between w-56 mr-2"
    >
      <div
        id="user_panel"
        class="flex items-center justify-between w-2/3 lg:w-full gap-1"
      >
        <div
          id="hiUser"
          class="flex-none"
        >
          Hola {{ userStore.getActiveUser }}!
        </div>
        <div
          id="cartIcon"
          class="flex"
        >
          <!-- <CartIcon :itemsCount="cartStore.getItemsCount" @click="prueba" /> -->
          <CartWidget />
        </div>
        <div
          id="log_buttons"
          class="hidden lg:flex"
        >
          <div
            v-if="userStore.getActiveUser"
            id="logout_button"
          >
            <router-link
              to="/"
              class="flex text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              @click="logOut"
            >
              Salir
            </router-link>
          </div>
          <div
            v-else=""
            id="login_button"
          >
            <router-link
              to="/"
              class="text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Login
            </router-link>
          </div>
        </div>
      </div>
      <div
        id="ham_button"
        class="flex lg:hidden"
      >
        <button
          class="flex items-center px-3 py-2 border rounded text-terciary border-terciary bg-contrast hover:border-white hover:bg-contrast-down"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseMenu"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div
    id="collapseMenu"
    class="collapse static lg:hidden"
  >
    <div class="w-1/3 p-6 absolute right-0 rounded-lg shadow-lg bg-contrast-down">
      <div
        id="router_links_entries_collapse"
        class="text-sm grid justify-items-end"
      >
        <RouterLink
          to="/"
          class="text-terciary hover:text-primary p-2 block"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/menu/entradas"
          class="p-2 text-terciary hover:text-primary"
        >
          Entradas
        </RouterLink>
        <RouterLink
          to="/menu/carnes"
          class="p-2 text-terciary hover:text-primary"
        >
          Carnes
        </RouterLink>
        <RouterLink
          to="/menu/ensaladas"
          class="p-2 text-terciary hover:text-primary"
        >
          Ensaladas
        </RouterLink>
        <RouterLink
          to="/menu/pastas"
          class="p-2 text-terciary hover:text-primary"
        >
          Pastas
        </RouterLink>
        <RouterLink
          to="/menu/veganos"
          class="p-2 text-terciary hover:text-primary"
        >
          Veganos
        </RouterLink>
        <RouterLink
          to="/menu/pescadosmariscos"
          class="p-2 text-terciary hover:text-primary"
        >
          Pescados/Mariscos
        </RouterLink>
        <!-- <RouterLink to="/registro" class="p-2 text-terciary hover:text-primary">
            Registro
          </RouterLink> -->
        <RouterLink
          v-if="userStore.getActiveUser == 'admin'"
          to="/newproduct"
          class="p-2 text-terciary hover:text-primary"
        >
          Nuevo Producto
        </RouterLink>
      </div>
      <div
        v-if="userStore.getActiveUser"
        id="logout_button"
      >
        <RouterLink
          to="/"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white bg-contrast hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          @click="logOut"
        >
          Salir
        </RouterLink>
      </div>
      <div
        v-else=""
        id="login_button"
      >
        <RouterLink
          to="/"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white bg-contrast hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          Logout
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup></script>

<template>
  <nav class="flex items-center justify-between h-16 flex-nowrap bg-contrast p-4">
    <div id="logo" class="flex items-center shrink-0 text-contrast-st mr-6">
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
    <div id="router_links_group" class="w-full flex grow invisible justify-between lg:visible lg:items-baseline lg:w-auto">
      <div id="router_links_entries" class="text-sm lg:grow-0">
        <RouterLink
          to="/"
          class="text-terciary hover:text-primary mr-4"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          class=" text-terciary hover:text-primary mr-4"
        >
          About
        </RouterLink>
        <RouterLink
          to="/prueba"
          class=" text-terciary hover:text-primary mr-4"
        >
          Prueba
        </RouterLink>
        <RouterLink
          to="/carrito"
          class=" text-terciary hover:text-primary mr-4"
        >
          Carrito
        </RouterLink>
        <RouterLink
          to="/menu"
          class=" text-terciary hover:text-primary mr-4"
        >
          Menu
        </RouterLink>
        <RouterLink
          to="/menu/entradas"
          class=" text-terciary hover:text-primary mr-4"
        >
          Entradas
        </RouterLink>
        <RouterLink
          to="/login"
          class=" text-terciary hover:text-primary mr-4"
        >
          Login
        </RouterLink>
        <RouterLink
          to="/registro"
          class=" text-terciary hover:text-primary mr-4"
        >
          Registro
        </RouterLink>
      </div>
      <div id="login_button">
        <a
          href="#"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >Login</a
        >
      </div>
    </div>
    <div id="ham_button" class="block shrink-0 lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-terciary border-terciary bg-contrast hover:border-white hover:bg-contrast-down"
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
  </nav>
</template>

<style scoped></style>

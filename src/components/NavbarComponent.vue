<script setup>

</script>

<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-nav bg-light">
      <router-link to="/" class="navbar-brand">Proyecto</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/carrito" class="nav-link">Carrito</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/menu" class="nav-link">Menu</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/menu/entradas" class="nav-link"
              >MenuEntradas</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/registro" class="nav-link">Registro</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>


<style scoped>
</style>
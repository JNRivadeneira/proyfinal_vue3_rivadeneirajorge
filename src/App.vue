<script setup>
import HelloWorld from './components/HelloWorld.vue'
import NavbarComponentVue from './components/NavbarComponent.vue';
import PruebaComponent from './components/PruebaComponent.vue'

</script>

<template>
  <div>
    
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/prueba">Prueba</router-link> |
      <router-link to="/carrito">Carrito</router-link> |
      <router-link to="/menu">Menu</router-link> |
      <router-link to="/menu/entradas">Menu Entradas</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/registro">Registro</router-link>

    </nav>
    
  </div>
  
  <router-view></router-view>
</template>

<style scoped>

</style>

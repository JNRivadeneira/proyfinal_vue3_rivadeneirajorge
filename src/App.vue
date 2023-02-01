<script setup>
import { useUserStore } from './stores/UserStore';
import NavbarComponentVue from './components/NavbarComponent.vue';

const userStore = useUserStore()
</script>

<template>
  <img class="fondo" src="/background.jpg">
  <div v-if="userStore.getActiveUser">
    <navbar-component-vue />
  </div>
  <router-view></router-view>
</template>

<style scoped>
.fondo {
    opacity: 0.5;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
}
</style>

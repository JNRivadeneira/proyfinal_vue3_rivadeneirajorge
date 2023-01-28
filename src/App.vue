<script setup>
import { useUserStore } from './stores/UserStore';
import NavbarComponentVue from './components/NavbarComponent.vue';

const userStore = useUserStore()
</script>

<template>
  <div v-if="userStore.getActiveUser">
    <navbar-component-vue />
  </div>
  <router-view></router-view>
</template>

<style scoped></style>

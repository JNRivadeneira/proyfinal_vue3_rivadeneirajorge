<script setup>
  import { useMenuStore } from '../stores/MenuStore';
  import ProductCard from './ProductCard.vue';

  const menuStore = useMenuStore()
  menuStore.fill()
</script>

<template>
  <h1>Menu</h1>
  <div
    v-if="menuStore.menues"
    class="grid grid-cols-2 gap-4 p-4"
  >
    <div
      v-for="(menu, index) of menuStore.menues"
      :key="index"
    >
      <ProductCard :product="menu" />
      <p>{{ menu.description }}</p>
    </div>
  </div>
</template>

<style></style>

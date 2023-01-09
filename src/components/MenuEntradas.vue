<script setup>
// import CardComponent from '../components/CardComponent.vue'
import { useProductStore } from '../stores/ProductStore'
import ProductCard from './ProductCard.vue';

const productStore = useProductStore();
productStore.fill();

</script>

<template>
  <h1>Entradas</h1>
  <div class="d-grip gap-2 d-flex justify-content-end">
    <button class="btn btn-blue-outfilled">Ver carrito</button>
  </div>
  <div class="grid grid-cols-3 gap-4">
    <div v-for="(plato, index) of productStore.products[0].entradas" :key="index">
      <ProductCard :product="plato"></ProductCard>
    </div>
  </div>
</template>

<style>

</style>

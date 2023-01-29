<script setup>
import { useProductStore } from '../stores/ProductStore'
import { useCartStore } from '../stores/CartStore'
import ProductCard from './ProductCard.vue'

const productStore = useProductStore()
const cartStore = useCartStore()
productStore.fill()

// const addToCart = (count, product) => {
//   count = parseInt(count)
//   for (let index = 0; index < count; index++){
//     cartStore.items.push(product)
//   }
// }

</script>

<template>
  <h1>Entradas</h1>
  <div v-if="productStore.products[0]" class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div v-for="(plato, index) of productStore.products[0].entradas" :key="index">
      <ProductCard :product="plato" @add-to-cart="cartStore.addItems($event, plato)" />
    </div>
  </div>
</template>

<style>

</style>

<script setup>
  import { useProductStore } from '../stores/ProductStore'
  import { useCartStore } from '../stores/CartStore'
  import ProductCard from './ProductCard.vue'

  const productStore = useProductStore()
  const cartStore = useCartStore()

  productStore.fill()

  const props = defineProps({
    menu: String,
  })

</script>

<template>
  <h1 class="text-lg capitalize">{{ menu }}</h1>
  <div v-if="productStore[menu]" class="grid grid-cols-2 md:grid-cols-3 gap-4 p-2">
    <div v-for="(plato, index) of productStore[menu]" :key="index">
      <ProductCard :product="plato" @add-to-cart="cartStore.addItems($event, plato)" />
    </div>
  </div>
</template>

<style></style>

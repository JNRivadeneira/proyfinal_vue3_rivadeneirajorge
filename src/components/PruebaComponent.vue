<script setup>
import ProductCard from './ProductCard.vue';

const producto = [
  {
    "title": "Tablas de Quesos",
    "image": "https://i.postimg.cc/GmTgrwS6/tabla-Quesos.jpg",
    "price": 10,
    "description": "Sunt exercitation officia elit qui officia do ut sunt ullamco incididunt ipsum pariatur cillum. Labore aliqua ipsum incididunt in elit minim duis adipisicing pariatur. Nulla magna in elit Lorem mollit non cillum commodo nostrud laborum consectetur.",
    "shoppingCard": true,
    "availableItems": 3,
  }
]
</script>

<template>
  <ProductCard :product="producto"/>
</template>

<style></style>

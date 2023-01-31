<script setup>
import { ref } from 'vue'
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
import RatingStars from '../components/RatingStars.vue';
import AppCountInput from '../components/AppCountInput.vue'

const props = defineProps({
  product: Object,
})

defineEmits(['addToCart'])

const count = ref(0)


</script>

<template>
  <div id="card"
    class="flex flex-col min-w-300 max-h-max bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a>
      <img class="w-full h-52 rounded-t-lg object-cover" :src="product.image" alt="product image" />
    </a>
    <div class="flex flex-col px-5 pb-5">
      <a>
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ product.title }}</h5>
      </a>
      <div v-if="product.rating">
        <RatingStars />
      </div>
      <div v-if="product.shoppingCard" >
        <div id="product_price" class="text-2xl font-bold text-gray-900 dark:text-white">AR$
          {{ product.price }}</div>
        <AppCountInput v-model="count" :available-items="product.availableItems" />
        <a 
          title="Agregar al carrito"
          class="flex justify-center items-center text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-b-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="$emit('addToCart', count), (count = 0)">
          <ShoppingCartIcon class="h-7 w-7 text-blue-200" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
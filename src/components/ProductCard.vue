<script setup>
import RatingStars from '../components/RatingStars.vue';
import { ref } from 'vue'
import AppCountInput from '../components/AppCountInput.vue'

const props = defineProps({
  product: Object,
})

defineEmits(['addToCart'])

const click = (title) => {
  console.log(`CLICK on ${title}`)
}

const count = ref(0)

</script>

<template>
  <!-- <h1>{{ product }}</h1> -->
  <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img class="p-8 rounded-t-lg" :src="product.image" alt="product image" />
    </a>
    <div class="px-5 pb-5">
      <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{product.title}}</h5>
      </a>
      <RatingStars />
      <div class="flex items-center justify-between">
        <span class="text-2xl font-bold text-gray-900 dark:text-white">AR$ {{product.price}}</span>
        <span>
          <AppCountInput v-model="count" :available-items="product.availableItems"/>
        </span>
        <span>
          <a href="#"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="$emit('addToCart', count), (count = 0)"
            >
            Add to cart
          </a>
        </span>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
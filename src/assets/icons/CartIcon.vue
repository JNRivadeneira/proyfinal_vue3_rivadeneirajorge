<script setup>
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  itemsCount: Number,
})
</script>

<template>
  <div class="">
    <span v-if="itemsCount" class="bg-white rounded-full border-solid border text-secondary">{{itemsCount}}</span>
    <ShoppingCartIcon class="lg:order-first h-6 w-6 text-primary hover:text-strong-down"/>
  </div>
</template>


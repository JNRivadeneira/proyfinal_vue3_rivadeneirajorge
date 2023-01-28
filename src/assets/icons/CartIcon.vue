<script setup>
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  itemsCount: Number,
})
</script>

<template>
  <div class="grid grid-cols-2">
    <ShoppingCartIcon class="h-6 w-6 text-primary hover:text-strong-down"/>
    <span v-if="itemsCount" class="bg-white rounded-full border-solid border text-secondary">{{itemsCount}}</span>
  </div>
</template>


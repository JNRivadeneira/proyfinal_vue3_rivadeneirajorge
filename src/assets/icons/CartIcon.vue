<script setup>
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  itemsCount: Number,
})
</script>

<template>
  <div class="relative">
    <span class="cursor-pointer">
      <ShoppingCartIcon class="h-7 w-7 text-primary hover:text-strong-down" />
      <div v-if="itemsCount"
        class="absolute bottom-3 left-4 h-4 w-4 text-xs bg-white rounded-full border-solid border text-secondary">
        {{ itemsCount }}</div>
    </span>
  </div>
</template>


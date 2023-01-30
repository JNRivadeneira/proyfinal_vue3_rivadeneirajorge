<script setup>
import { ref } from "vue";
import { useCartStore } from "../stores/CartStore";
import AppModalOverlay from "./pruebas/AppModalOverlay.vue";
import AppButton from "./pruebas/AppButton.vue";
import CartItem from "./pruebas/CartItem.vue";
import CartIcon from "../assets/icons/CartIcon.vue";

const cartStore = useCartStore();
const active = ref(false);
</script>

<template>
  <div class="relative">
    <!-- el icono se muestra siempre -->
    <span class="cursor-pointer" @click="active = true">
      <CartIcon :itemsCount="cartStore.getItemsCount"/>
    </span>
    <AppModalOverlay :active="active" @close="active = false">
      <div v-if="!cartStore.isEmpty">
        <ul class="items-in-cart">
          <CartItem
            v-for="(items, title) in cartStore.grouped"
            :key="title"
            :product="items[0]"
            :count="items.length"
            @updateCount="cartStore.setItemCount(items[0], $event)"
            @clear="cartStore.clearItem(title)"
          />
        </ul>
        <div class="flex justify-end text-2xl mb-5">
          Total: <strong>${{ cartStore.total }}</strong>
        </div>
        <div class="flex justify-end">
          <AppButton class="secondary mr-2" @click="cartStore.removeAllItems"
            >Vaciar carrito</AppButton
          >
          <!-- <AppButton class="primary" @click="cartStore.checkout"
            >Checkout</AppButton
          > -->
        </div>
      </div>
      <div v-else><em>No hay nada en tu carrito.</em></div>
    </AppModalOverlay>
  </div>
</template>

<style lang="pcss" scoped>
.items-in-cart{
  @apply mb-5;
}
.items-in-cart li{
  @apply flex justify-between p-2;
}
.items-in-cart li:nth-of-type(even){
  @apply bg-gray-300;
}
</style>
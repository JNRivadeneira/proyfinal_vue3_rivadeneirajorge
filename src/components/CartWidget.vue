<script setup>
import { ref } from "vue";
import { useCartStore } from "../stores/CartStore";
import AppModalOverlay from "./AppModalOverlay.vue";
import AppButton from "./AppButton.vue";
import CartItem from "./CartItem.vue";
import CartIcon from "../assets/icons/CartIcon.vue";

const cartStore = useCartStore();
const active = ref(false);
</script>

<template>
  <div class="relative">
    <!-- el icono se muestra siempre -->
    <span class="cursor-pointer" @click="active = true">
      <CartIcon :itemsCount="cartStore.getItemsCount" />
    </span>
    <AppModalOverlay :active="active" @close="active = false">
      <div v-if="!cartStore.isEmpty">
        <table class="table w-full min-w-fit">
          <CartItem v-for="(items, title) in cartStore.grouped" :key="title" :product="items[0]" :count="items.length"
            @updateCount="cartStore.setItemCount(items[0], $event)" @clear="cartStore.clearItem(title)" class="bg-gray-100 even:bg-gray-300"/>
        </table>
        <div class="flex justify-end text-2xl mb-5">
          Total: <strong>${{ cartStore.total }}</strong>
        </div>
        <div class="flex justify-end">
          <AppButton class="secondary mr-2" @click="cartStore.removeAllItems">Vaciar carrito</AppButton>
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

</style>
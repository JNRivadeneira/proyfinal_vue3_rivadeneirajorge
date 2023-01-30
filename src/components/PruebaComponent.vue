<script setup>
import { ref } from 'vue';
import AppModalOverlay from './AppModalOverlay.vue';
import CartWidget from './CartWidget.vue'
// import AppButton from './pruebas/AppButton.vue';
// import { useCartStore } from '../stores/CartStore';
// const cartStore = useCartStore()

const active = ref(false);

const toggle = () => { active.value = !active.value }
// function toggle(){
//   active.value = true
// }
</script>

<template>
 <CartWidget />
 <button id="over" @click="active = !active">{{ active }}</button>
 <!-- <AppModalOverlay :active="active" @close="active = false">
 hola mundo
 </AppModalOverlay> -->
</template>

<style></style>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  activeUser: String
})
</script>

<template>
 <h1>Bienvenido {{ props.activeUser }}!</h1>
 <p>Vista primer página de usuario registrado</p>
</template>

<style scoped>

</style>
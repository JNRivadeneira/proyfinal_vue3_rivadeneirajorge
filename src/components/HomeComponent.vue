<script setup>
import { ref } from 'vue';

const props = defineProps({
  activeUser: String
})
</script>

<template>
  <h1>Bienvenido {{ props.activeUser }}!</h1>
</template>

<style scoped>

</style>
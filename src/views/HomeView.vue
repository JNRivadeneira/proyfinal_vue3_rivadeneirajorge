<script setup>
import HomeComponent from '../components/HomeComponent.vue';
import ProductCard from '../components/ProductCard.vue';

</script>

<template>
    <HomeComponent />
    <ProductCard :product="{image: 'https://i.postimg.cc/52yZshT9/bebeYoda.png', title: 'titulo', cost: '100'}"/>
</template>

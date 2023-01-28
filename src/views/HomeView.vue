<script setup>
import { useUserStore } from '../stores/UserStore'
import HomeComponent from '../components/HomeComponent.vue';
import LandingPageComponent from '../components/LandingPageComponent.vue';
import LoginForm from '../components/forms/LoginForm.vue';

const userStore = useUserStore()

</script>

<template>
    <HomeComponent v-if="userStore.getActiveUser" :active-user="userStore.getActiveUser"/>
    <!-- <LandingPageComponent /> -->
    <LoginForm v-else=""/>
</template>

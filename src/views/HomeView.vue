<script setup>
import { useUserStore } from '../stores/UserStore'
import { useRouter } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import LandingPageComponent from '../components/LandingPageComponent.vue'
import LoginForm from '../components/forms/LoginForm.vue'

const userStore = useUserStore()
const router = useRouter()

const goToLoginView = () => { router.push("/login") }

</script>

<template>
    <HomeComponent v-if="userStore.getActiveUser" :active-user="userStore.getActiveUser"/>
    <!-- <LandingPageComponent /> -->
    <LoginForm v-else="" />
</template>

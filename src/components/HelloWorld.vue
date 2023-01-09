<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/UserStore'

const userStore = useUserStore()

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>HelloWorld Component</h1>
  <pre>{{ userStore }}</pre>
</template>

<style scoped>
</style>

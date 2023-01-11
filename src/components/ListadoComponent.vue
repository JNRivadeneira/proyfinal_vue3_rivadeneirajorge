<script setup>
import CardComponent from '../components/CardComponent.vue'
import { useMenuStore } from '../stores/MenuStore';

const menuStore = useMenuStore()
menuStore.fill()

</script>

<template>
  <h1>Menu</h1>
  <table v-if="menuStore.menues">
    <tr v-for="(menu, index) of menuStore.menues" :key="index">
      <td>
        <card-component :title="menu.title" :image="menu.image" :available-items="menu.availableItems">
        </card-component>

      </td>
      <td>
        <p>{{ menu.description }}</p>
      </td>
    </tr>
  </table>
</template>

<style>

</style>

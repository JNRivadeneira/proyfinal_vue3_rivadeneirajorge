<script setup>
import CardComponent from '../components/CardComponent.vue'
import { useProductStore } from '../stores/ProductStore'

const productStore = useProductStore();
productStore.fill();

</script>

<template>
      <main>
        <h1>Entradas</h1>
        <div class="d-grip gap-2 d-flex justify-content-end">
          <button class="btn btn-blue-outfilled">Ver carrito</button>
        </div>
        <table>
          <tr v-for="(plato, index) of productStore.products[0].entradas" :key="index">
            <td>
              <CardComponent 
                :title="plato.title" 
                :image="plato.image" 
                :available-items="plato.availableItems"
                :cost="plato.cost"
                :shopping-card="true"
              >
              </CardComponent>
              
            </td>
            <td>
              <p>{{plato.description}}</p>
            </td>
          </tr>
        </table>
        <button class="btn btn-blue">Menu</button>
      </main>
    
</template>

<style>

</style>

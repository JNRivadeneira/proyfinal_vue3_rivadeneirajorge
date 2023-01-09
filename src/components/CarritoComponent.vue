<template>
  <div>
    <h1>Carrito de compras</h1>
    <table>
      <tr>
        <th></th>
        <th></th>
        <th>Items</th>
        <th>Descripción</th>
        <th>Precio unitario</th>
        <th>Subtotal</th>
        <th></th>
      </tr>
      <tr v-for="(item, index) in carritoItems" :key="index">
        <!-- <pre>{{carritoItems}}</pre> -->
        <td><button>+</button></td>
        <td><button>-</button></td>
        <td>{{ item.cantidad }}</td>
        <td>{{ item.descripcion }}</td>
        <td>{{ item.precioUnitario }}</td>
        <td>{{ item.cantidad * item.precioUnitario }}</td>
        <td><button>X</button></td>

      </tr>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th>TOTAL</th>
        <th>550</th>
      </tr>
    </table>
    <div class="grid grid-cols-2 gap-4">
      <button class="btn btn-red-outfilled">Cancelar</button>
      <button class="btn btn-blue">Pagar</button>
    </div>
  </div>
</template>

<script setup>
const carritoItems = [
  {
    cantidad: 2,
    descripcion: "Papas fritas",
    precioUnitario: 200,
  },
  {
    cantidad: 3,
    descripcion: "Tabla de quesos",
    precioUnitario: 50
  }
]

</script>

<style scoped>

</style>
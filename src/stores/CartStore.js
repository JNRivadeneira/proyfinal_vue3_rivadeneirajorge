import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("CartStore", () => {
// state -> ref()
const items = ref([])
// getters -> computed()
const getItemsCount = computed(() => {return items.value.length})
// actions -> funtion()
function addItems (count, item) {
  count = parseInt(count)
  for (let index = 0; index < count; index++){
    items.value.push({ ...item })
  }
}

function removeAllItems() { items.value = []}
// return
return {items, addItems, getItemsCount, removeAllItems}
})

// export const useCartStore = defineStore("CartStore", {
//   state: () => {
//     return {
//       items: [],
//     };
//   },
//   actions: {
//     addItems(count, item) {
//       count = parseInt(count);
//       for (let index = 0; index < count; index++) {
//         this.items.push({ ...item }); // usar spread permite clonar los items, de manera que no estaremos pasando los objetos por referencia, sino por valor. Evitando bugs
//       }
//     },
//   },
// });

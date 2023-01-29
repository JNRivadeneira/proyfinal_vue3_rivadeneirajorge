import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("CartStore", () => {
// state -> ref()
const items = ref([])
// getters -> computed()
const getItemsCount = computed(() => {return items.value.length})
const isEmpty = computed(() => { return items.value.length === 0 })
// actions -> funtion()
function addItems (count, item) {
  count = parseInt(count)
  for (let index = 0; index < count; index++){
    items.value.push({ ...item })
  }
}

function removeAllItems() { items.value = []}
// return
return {items, addItems, getItemsCount, removeAllItems, isEmpty}
})

import { defineStore } from "pinia";
import { groupBy } from "lodash";
import { ref, computed } from "vue";

export const useCartStore = defineStore("CartStore", () => {
// state -> ref()
const items = ref([])
// getters -> computed()
const getItemsCount = computed(() => {return items.value.length})
const isEmpty = computed(() => { return getItemsCount.value === 0 })
const grouped = computed(() => {
  const grouped = groupBy(items.value, (item) => item.title)
  const sorted = Object.keys(grouped).sort()
  let inOrder = {}
  sorted.forEach((key) => (inOrder[key] = grouped[key]))
  return inOrder
})
const total = computed(() => {return items.value.reduce((p, c) => p + c.price, 0)})
// const groupCount = computed(() => {return (title) => {return console.log(title)}})
// actions -> funtion()
function addItems (count, item) {
  count = parseInt(count)
  for (let index = 0; index < count; index++){
    items.value.push({ ...item })
  }
}

function removeAllItems() { items.value = []}

function clearItem(itemName){
  items.value = items.value.filter((item) => item.title !== itemName)
}

function setItemCount(item, count){
  clearItem(item.title)
  addItems(count, item)
}
// return
return {items, addItems, getItemsCount, removeAllItems, isEmpty, grouped, clearItem, setItemCount, total}
})

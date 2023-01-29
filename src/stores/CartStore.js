import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: [],
    };
  },
  actions: {
    addItems(count, item) {
      count = parseInt(count);
      for (let index = 0; index < count; index++) {
        this.items.push({ ...item }); // usar spread permite clonar los items, de manera que no estaremos pasando los objetos por referencia, sino por valor. Evitando bugs
      }
    },
  },
});

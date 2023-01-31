import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
// import products from '../data/products.json'

const URLGET_ENTRADAS = "https://api.jsonbin.io/v3/b/63d96ffdace6f33a22d1b85d?meta=false"
const URLPUT_ENTRADAS = "https://api.jsonbin.io/v3/b/63d96ffdace6f33a22d1b85d"

const REQ_CONFIG = {
  headers: {"X-Master-Key": "$2b$10$ZyKyROpXJIjQJK8kHryPPu9LtG53TPB5A3DxYfZUzlHnsxo06F7vK", "Content-Type": "application/json"}
}

export const useProductStore = defineStore('ProductStore', () => {
  // state
  const entradas = ref([])

  // actions
  async function fill(){
    entradas.value = (await axios.get(URLGET_ENTRADAS, REQ_CONFIG)).data
  }

  return {entradas, fill}
})


/*
  // state
  state: () => {
    return {
      products: {}
    };
  },
  // actions
  actions: {
    async fill(){
      let URLGET="https://6384e61b3fa7acb14f041a45.mockapi.io/api/platos";
      this.products = (await axios.get(URLGET)).data
    }
  }
  // getters
})
*/
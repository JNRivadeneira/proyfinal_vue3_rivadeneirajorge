import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
// import products from '../data/products.json'

const URLGET_ENTRADAS = "https://api.jsonbin.io/v3/b/63d96ffdace6f33a22d1b85d?meta=false";
const URLPUT_ENTRADAS = "https://api.jsonbin.io/v3/b/63d96ffdace6f33a22d1b85d";
const URLGET_CARNES = "https://api.jsonbin.io/v3/b/63d97050c0e7653a056acb40?meta=false";
const URLPUT_CARNES = "https://api.jsonbin.io/v3/b/63d97050c0e7653a056acb40";
const URLGET_ENSALADAS = "https://api.jsonbin.io/v3/b/63d9707dace6f33a22d1b929?meta=false";
const URLPUT_ENSALADAS = "https://api.jsonbin.io/v3/b/63d9707dace6f33a22d1b929";
const URLGET_VEGANOS = "https://api.jsonbin.io/v3/b/63d9708febd26539d0718b6b?meta=false";
const URLPUT_VEGANOS = "https://api.jsonbin.io/v3/b/63d9708febd26539d0718b6b";
const URLGET_PASTAS = "https://api.jsonbin.io/v3/b/63d97041c0e7653a056acb28?meta=false";
const URLPUT_PASTAS = "https://api.jsonbin.io/v3/b/63d97041c0e7653a056acb28";
const URLGET_PESCADOSMARISCOS = "https://api.jsonbin.io/v3/b/63d97072c0e7653a056acb78?meta=false";
const URLPUT_PESCADOSMARISCOS = "https://api.jsonbin.io/v3/b/63d97072c0e7653a056acb78";

const REQ_CONFIG = {
  headers: {"X-Master-Key": "$2b$10$ZyKyROpXJIjQJK8kHryPPu9LtG53TPB5A3DxYfZUzlHnsxo06F7vK", "Content-Type": "application/json"}
};

export const useProductStore = defineStore('ProductStore', () => {
  // state
  const entradas = ref([]);
  const carnes = ref([]);
  const ensaladas = ref([]);
  const veganos = ref([]);
  const pastas = ref([]);
  const pescadosmariscos = ref([]);

  // actions
  async function fill(){
    entradas.value = (await axios.get(URLGET_ENTRADAS, REQ_CONFIG)).data;
    carnes.value = (await axios.get(URLGET_CARNES, REQ_CONFIG)).data;
    ensaladas.value = (await axios.get(URLGET_ENSALADAS, REQ_CONFIG)).data;
    veganos.value = (await axios.get(URLGET_VEGANOS, REQ_CONFIG)).data;
    pastas.value = (await axios.get(URLGET_PASTAS, REQ_CONFIG)).data;
    pescadosmariscos.value = (await axios.get(URLGET_PESCADOSMARISCOS, REQ_CONFIG)).data;
  }

  return {entradas, carnes, ensaladas, veganos, pastas, pescadosmariscos, fill};
});

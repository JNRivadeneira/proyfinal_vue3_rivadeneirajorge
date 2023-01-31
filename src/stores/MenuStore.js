import { ref, computed } from "vue";
import { defineStore } from "pinia"
import axios from "axios";
// import menues from "../data/menues.json"

const URLGET="https://api.jsonbin.io/v3/b/63d89795ebd26539d07033fa?meta=false"
const requestConfig = {
  headers: {"X-Master-Key": "$2b$10$ZyKyROpXJIjQJK8kHryPPu9LtG53TPB5A3DxYfZUzlHnsxo06F7vK"}
}

export const useMenuStore = defineStore("MenuStore", () => {
  // state -> ref()
  const menues = ref([])
  // getters
  const getMenues = computed(() => { return menues.value })
  // actions
  async function fill(){
    menues.value = (await axios.get(URLGET, requestConfig)).data
  }
  return {menues, getMenues, fill}
})

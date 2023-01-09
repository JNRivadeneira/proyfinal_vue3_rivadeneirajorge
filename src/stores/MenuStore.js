import { defineStore } from "pinia"
import axios from "axios";
// import menues from "../data/menues.json"

export const useMenuStore = defineStore("MenuStore", {
  state: () => {
    return {
      menues: []
    };
  },
  // actions
  actions: {
    async fill(){
      
      let URLGET="https://6384e61b3fa7acb14f041a45.mockapi.io/api/menues";
      // this.menues = (await import('../data/menues.json')).default
      this.menues = (await axios.get(URLGET)).data
    }
  }
  // getters
})

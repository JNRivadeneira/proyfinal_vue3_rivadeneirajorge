import { defineStore } from "pinia";
import users from '../data/users.json'

export const useUserStore = defineStore('UserStore', {
  // state
  state: () => {
    return {
      usuarioActivo: null,
      users,
    };
  },
  // getters
  getters: {
    getUser: (state) => {
      return state.users
    },
  },
});
// actions
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import users from '../data/users.json'
import axios from "axios";

const URLGET = "https://api.jsonbin.io/v3/b/63d85dcdc0e7653a056917e0?meta=false"
const requestConfig = {
  headers: {"X-Master-Key": "$2b$10$ZyKyROpXJIjQJK8kHryPPu9LtG53TPB5A3DxYfZUzlHnsxo06F7vK"}
}


export const useUserStore = defineStore('UserStore', () => {
  // state -> ref()
  const registeredUsers = ref([])
  const activeUser = ref(null)

  // getters -> computed()
  const getUsers = computed(() => { return registeredUsers.value })
  const getActiveUser = computed(() => { return activeUser.value })

  // actions -> function()
  // function loadUsers() { 
  //   registeredUsers.value = users
  // }
  function setActiveUser(user) { activeUser.value = user }
  async function fill(){
    registeredUsers.value = (await axios.get(URLGET, requestConfig)).data
  }

  // return
  return { registeredUsers, activeUser, getUsers, getActiveUser, setActiveUser, fill}
})

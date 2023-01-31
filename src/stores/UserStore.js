import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const URLGET = "https://api.jsonbin.io/v3/b/63d85dcdc0e7653a056917e0?meta=false"
const URLPUT = "https://api.jsonbin.io/v3/b/63d85dcdc0e7653a056917e0?"
const requestConfig = {
  headers: {"X-Master-Key": "$2b$10$ZyKyROpXJIjQJK8kHryPPu9LtG53TPB5A3DxYfZUzlHnsxo06F7vK", "Content-Type": "application/json"}
}

export const useUserStore = defineStore('UserStore', () => {
  // state -> ref()
  const registeredUsers = ref([])
  const activeUser = ref(null)

  // getters -> computed()
  const getUsers = computed(() => { return registeredUsers.value })
  const getActiveUser = computed(() => { return activeUser.value })

  // actions -> function()
  function setActiveUser(user) { activeUser.value = user }
  async function fill(){
    registeredUsers.value = (await axios.get(URLGET, requestConfig)).data
  }

  async function addNewUser(user){
    registeredUsers.value.push(user)
    await axios.put(URLPUT, registeredUsers.value, requestConfig)
      .then ((response) => console.log(response))
      .catch((error) => console.log(error))
  }
 
  // return
  return { registeredUsers, activeUser, getUsers, getActiveUser, setActiveUser, fill, addNewUser}
})

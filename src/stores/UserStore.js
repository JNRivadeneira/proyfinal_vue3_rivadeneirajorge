import { ref, computed } from "vue";
import { defineStore } from "pinia";
import users from '../data/users.json'

export const useUserStore = defineStore('UserStore', () => {
  // state -> ref()
  const registeredUsers = ref([])
  const activeUser = ref([])

  // getters -> computed()
  const getUsers = computed(() => { return registeredUsers.value})

  // actions -> function()
  function loadUsers() { registeredUsers.value = users}
  function setActiveUser(user) { activeUser.value = user }

  // return
  return { registeredUsers, activeUser, getUsers, loadUsers, setActiveUser}
})

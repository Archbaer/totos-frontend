import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', () => {
  // States
  const user = ref({
    username: localStorage.getItem('username') || '',
    isLogged: localStorage.getItem('isLogged') === 'true',
  })

  // Getters
  const getUsername = computed(() => user.value.username)
  const isLoggedIn = computed(() => user.value.isLogged)

  // Actions
  const login = (username, password) => {
    user.value.username = username
    user.value.isLogged = true

    // Persist login state
    localStorage.setItem('username', username)
    localStorage.setItem('isLogged', 'true')
  }

  const logout = () => {
    user.value.username = ''
    user.value.isLogged = false

    // Clear persisted login state
    localStorage.removeItem('username')
    localStorage.removeItem('isLogged')
  }

  const setUsername = (username) => {
    user.value.username = username
    localStorage.setItem('username', username)
  }

  return {
    user,
    getUsername,
    isLoggedIn,
    login,
    logout,
    setUsername,
  }
})

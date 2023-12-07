import { defineStore } from 'pinia'

const useAuthStore = defineStore('authStore', () => {
  const setAuthToken = (authToken: string) => {
    localStorage.setItem('authToken', authToken)
  }

  return {
    setAuthToken
  }
})

export { useAuthStore }

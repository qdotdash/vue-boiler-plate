import { ref } from 'vue'
import axios from 'axios'

import { API_BASE_URL } from '@/constants/config'
import { ROUTES } from '@/constants/routes'
import router from '@/router'

import type { ApiPayloadType } from '@/types/api'

const useApi = ({ query, method, isLazy, payload }: ApiPayloadType) => {
  const data = ref()
  const isError = ref(false)

  const makeApiCall = async (payload?: Record<string, string>) => {
    let url = ''
    if (query) url = `${query}`

    const authToken = localStorage.getItem('authToken')

    try {
      const apiResponse = await axios({
        method,
        url,
        baseURL: API_BASE_URL,
        data: payload,
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })

      data.value = apiResponse.data
    } catch (err: any) {
      if (err.response.data === 'Unauthenticated') {
        // TODO Replace with refresh token logic
        const loginUrl = `${API_BASE_URL}login`
        axios
          .post(loginUrl, { username: 'user1', password: 'password123' })
          .then((response) => {
            localStorage.setItem('authToken', response.data.authToken)
          })
          .catch(() => {
            localStorage.removeItem('authToken')
            router.push(ROUTES.LOGIN)
          })
      } else if (err.response.data === 'Unauthorized') {
        router.push(ROUTES.LOGIN)
      }
      isError.value = true
    } finally {
      // TODO Add loading logic
    }
  }

  const makeApiCallIfNeeded = () => {
    if (!isLazy) makeApiCall(payload)
  }

  makeApiCallIfNeeded()

  return {
    data,
    isError,
    makeCall: makeApiCall
  }
}

export { useApi }

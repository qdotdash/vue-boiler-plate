import { ref } from 'vue'
import axios from 'axios'

import { API_BASE_URL } from '@/constants/config'

import type { ApiPayloadType } from '@/types/api'

const useApi = ({ query, method, isLazy, payload }: ApiPayloadType) => {
  const data = ref()
  const isError = ref(false)

  const makeApiCall = async (payload?: Record<string, string>) => {
    let url = ''
    if (query) url = `${query}`

    try {
      const apiResponse = await axios({
        method,
        url,
        baseURL: API_BASE_URL,
        data: payload
      })

      data.value = apiResponse.data
    } catch (err: any) {
      isError.value = true
    } finally {
      console.log({ data, isError })
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

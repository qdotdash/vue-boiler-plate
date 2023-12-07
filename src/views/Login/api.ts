import { useApi } from '@/services/api'
import { ApiMethodTypes } from '@/types/api'

const loginApis = {
  login: () =>
    useApi({
      query: 'login',
      method: ApiMethodTypes.POST,
      isLazy: true
    })
}

export const { login } = loginApis

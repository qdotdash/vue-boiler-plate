import { useApi } from '@/services/api'
import { ApiMethodTypes } from '@/types/api'

const loginApis = {
  login: (user: { username: string; password: string }) =>
    useApi({
      query: 'login',
      method: ApiMethodTypes.POST,
      payload: user
    })
}

export const { login } = loginApis

import { useApi } from '@/services/api'
import { ApiMethodTypes } from '@/types/api'

const protectedApis = {
  getProtectedApi: () =>
    useApi({
      query: 'protected',
      method: ApiMethodTypes.GET,
      isLazy: true
    })
}
export const { getProtectedApi } = protectedApis

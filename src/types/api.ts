export enum ApiMethodTypes {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

export type ApiPayloadType = {
  query: string
  method: ApiMethodTypes
  isLazy?: boolean
  payload?: Record<string, string>
}

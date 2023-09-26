export type BasicRequest = {
  path: string
  authenticated: boolean
  headers?: any
  body?: any
}

export type BasicResponse<T> = {
  body: T
}
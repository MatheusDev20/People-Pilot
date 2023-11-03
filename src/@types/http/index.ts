export type BasicRequest = {
  path: string
  authenticated: boolean
  headers?: any
  body?: any
  formData?: FormData
}

export type BasicResponse<T> = {
  body: T
}

export type RequestState = {
  loading: boolean
  error: string
}

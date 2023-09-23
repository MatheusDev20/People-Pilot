export type BasicRequest = {
  path: string
  headers?: any
  body?: any
  authenticated: boolean
}

export type BasicResponse = {
  statusCode: number
  body: any
}

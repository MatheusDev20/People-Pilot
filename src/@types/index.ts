export type LoginFormData = {
  email: string
  password: string
}

export type LoginPayload = {
  accessToken: string
  // TODO: Tipar o usuário
  user: any
}

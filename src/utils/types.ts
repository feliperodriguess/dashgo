export type User = {
  id: string
  name: string
  email: string
  created_at: string
}

export type CreateUserFormData = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

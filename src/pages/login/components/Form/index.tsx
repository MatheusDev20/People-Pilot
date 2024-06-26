/* eslint-disable @typescript-eslint/no-misused-promises */
import { type LoginFormData } from '@/@types'
import { useAuth } from '@/contexts/auth-context'
import { loginFormSchema } from '@/validations/schemas/login/login-form-schema'
import React, { type ChangeEvent, type FormEvent, useState } from 'react'
import { LoginInput } from '../Inputs'
import { Exclamation } from '@/assets/svgs/exclamation'
import { type ObjectSchema } from 'yup'
import { type ValidationResult } from '@/@types/yup'

export const LoginForm = (): React.JSX.Element => {
  const [errors, setErrors] = useState<Record<string, string[]> | null>(null)
  const [loginForm, setLogin] = useState<LoginFormData>({
    password: '',
    email: '',
  })

  const { signIn, loading, failedMessage, setFailedMessage } = useAuth()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    if (failedMessage) setFailedMessage('')

    e.preventDefault()
    const { veredict, errors } = await validateForm(loginForm, loginFormSchema)

    if (!veredict) {
      setErrors(errors)
      return
    }

    setErrors(null)
    await signIn(loginForm)
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setLogin({
      ...loginForm,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 items-center p-8 justify-items-center"
      >
        <div className="flex flex-col w-full items-center p-4">
          <div className="w-full flex flex-col items-center gap-3 p-2">
            <LoginInput
              name="email"
              onChange={(e) => {
                handleInput(e)
              }}
              error={errors ? errors.email : null}
              label="Email"
              placeholder="Email..."
            />

            <LoginInput
              name="password"
              type="password"
              onChange={(e) => {
                handleInput(e)
              }}
              error={errors ? errors.password : null}
              label="Password"
              placeholder="Password..."
            />
            {failedMessage && (
              <div className="w-full flex justify-center gap-2">
                <Exclamation />
                <span className="text-sm text-red-500">{failedMessage}</span>
              </div>
            )}
          </div>
          <a className="text-sm mb-10 mt-5 link-primary cursor-pointer no-underline font-medium hover:text-blue-400">
            Forgot password?
          </a>
          <button
            className="btn btn-primary w-[80%] md:w-[35%] hover:bg-blue-400"
            onClick={() => handleSubmit}
          >
            {loading ? (
              <span className="loading loading-dots"></span>
            ) : (
              <p>LOGIN</p>
            )}
          </button>
        </div>
      </form>
    </>
  )
}

const validateForm = async (
  formData: LoginFormData,
  schema: ObjectSchema<any>,
): Promise<ValidationResult> => {
  try {
    await schema.validate(formData, { abortEarly: false })
    return {
      veredict: true,
      errors: null,
    }
  } catch (err: any) {
    const { inner } = err
    const errorMap: Record<string, string[]> = {}
    inner.forEach((error: any) => {
      const { path, errors } = error
      errorMap[path] = errors
    })
    return {
      veredict: false,
      errors: errorMap,
    }
  }
}

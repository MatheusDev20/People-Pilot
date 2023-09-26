import React, { ChangeEvent, FormEvent, useState } from 'react'
import alert from '../../../../assets/svgs/alert.svg'
import { SignInButton } from '../Buttons/sign-in-button'
import { LoginFormData } from '../../../../@types'
import { CustomInput } from '../../../../components/Inputs/Standard'
import { LockIcon, PersonIcon } from '../../../../assets/icons/index'
import { loginFormSchema } from '../../../../validations/schemas/login/login-form-schema'
import { ValidationResult } from '../../../../@types/yup'
import { ObjectSchema } from 'yup'
import { Spinner } from '@material-tailwind/react'
import { useAuth } from '../../../../contexts/auth-context'

export const Form = (): React.JSX.Element => {
  const [errors, setErrors] = useState<{ [key: string]: string[] } | null>(null)
  const [loginForm, setLogin] = useState<LoginFormData>({
    password: '',
    email: '',
  })

  const { signIn, loading, failedMessage, setFailedMessage } = useAuth()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  
    if(failedMessage) setFailedMessage('')
      e.preventDefault()
      const { veredict, errors } = await validateForm(loginForm, loginFormSchema)
      if (!veredict) {
        setErrors(errors)
        return
      }

      setErrors(null)
      signIn(loginForm)
    }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...loginForm, [e.target.name]: e.target.value })
  }
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-5 items-center p-8 justify-items-center"
      >
        <div className="flex flex-col w-full items-center p-4">
          <CustomInput
            name="email"
            onChange={(e) => handleInput(e)}
            error={errors ? errors.email : null}
            wSize="medium"
            icon={<PersonIcon />}
            label="Email"
            placeholder="Username or STX email..."
          />

          <CustomInput
            name="password"
            type="password"
            onChange={(e) => handleInput(e)}
            error={errors ? errors.password : null}
            wSize="medium"
            icon={<LockIcon />}
            label="Password"
            placeholder="Password..."
          />
          {failedMessage && (
            <div className="flex gap-2 items-center">
              {
                <span className=" text-sm text-red-500 font-semibold">
                  {failedMessage}
                </span>
          
              }
            <img src={alert} alt='alert' className='h-5 w-5' />
            </div>
          )}
          <a className="text-sm mb-10 mt-5 cursor-pointer no-underline font-medium text-blue-800 hover:text-blue-400 dark:text-primary-500">
            Forgot password?
          </a>
          <SignInButton>
            {loading ? (
              <Spinner className="self-center" color="blue" />
            ) : (
              'Login'
            )}
          </SignInButton>
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
    return { veredict: true, errors: null }
  } catch (err: any) {
    const { inner } = err
    const errorMap: { [key: string]: string[] } = {}
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

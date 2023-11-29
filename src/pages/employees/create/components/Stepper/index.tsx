/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react'
import { StepFour, StepOne, StepThree, StepTwo, steps } from '../Steps'
import { useCreateEmployeeForm } from '../../../../../contexts/create-employee-form'
import { validateCurrentStep } from '../../../../../validations/schemas'
import { useMutation } from '@tanstack/react-query'
import { postEmployee } from '../../../../../api/employee'
import { StandardButton } from '../../../../../components/Buttons/Standard'
import { type Feedback } from '../../../../../@types'
import { AlertModal } from '../../../../../components/AlertModal'
import clsx from 'clsx'

export const Stepper = (): React.JSX.Element => {
  const { formData } = useCreateEmployeeForm()
  const [activeStep, setActiveStep] = React.useState(0)
  const [feedback, setFeedback] = useState<Feedback>({
    title: '',
    type: '',
    msg: '',
    onScreen: false,
  })

  const [errors, setErrors] = useState<Record<string, string[]> | null>(null)

  const { isLoading, mutate, isSuccess, data } = useMutation({
    mutationFn: postEmployee,
  })

  const getCurrentStep = (currStep: number): JSX.Element | undefined => {
    switch (currStep) {
      case 0:
        return <StepOne errors={errors} />

      case 1:
        return <StepTwo errors={errors} />

      case 2:
        return (
          <StepThree
            errors={errors}
            setErrors={setErrors}
            isLoading={isLoading}
          />
        )
    }
  }

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  const handleNext = async (): Promise<void> => {
    const { veredict, errors } = await validateCurrentStep(formData, activeStep)

    if (!veredict) {
      setErrors(errors)
      return
    }
    setErrors(null)
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleFinish = async (): Promise<void> => {
    try {
      mutate(formData)
      setFeedback({
        msg: 'Employee created with success',
        onScreen: true,
        title: 'Created',
        type: 'success',
      })
    } catch (err) {
      setFeedback({
        msg: 'Error creating employee',
        onScreen: true,
        type: 'error',
        title: 'Error',
      })
    }
    mutate(formData)
  }

  return (
    <>
      {isSuccess ? (
        <StepFour employeeId={data} />
      ) : (
        <div className="flex flex-col w-full gap-6 p-3">
          {feedback.onScreen && <AlertModal feedback={feedback} />}
          <ul className="steps">
            {steps.map((step) => (
              <li
                className={clsx(
                  {
                    'step-success':
                      step.stepId < activeStep || formData.stepThree.avatar,
                  },
                  { 'step-accent': step.stepId === activeStep },
                  'step step-primary',
                )}
                key={step.label}
              >
                {step.label}
              </li>
            ))}
          </ul>
          <div className="flex p-3">{getCurrentStep(activeStep)}</div>
          <div className="justify-center gap-24 flex p-3">
            {activeStep !== 0 && (
              <StandardButton disabled={isLoading} onClick={handleBack}>
                Back
              </StandardButton>
            )}
            {activeStep === steps.length - 1 ? (
              <StandardButton disabled={isLoading} onClick={handleFinish}>
                Create Employee
              </StandardButton>
            ) : (
              <StandardButton onClick={handleNext}>NEXT</StandardButton>
            )}
          </div>
        </div>
      )}
    </>
  )
}

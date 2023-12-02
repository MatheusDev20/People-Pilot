/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useRef, useState } from 'react'
import { StepOne, StepThree, StepTwo, steps } from '../Steps'
import { useCreateEmployeeForm } from '../../../../../contexts/create-employee-form'
import { validateCurrentStep } from '../../../../../validations/schemas'
import { useMutation } from '@tanstack/react-query'
import { postEmployee } from '../../../../../api/employee'
import { StandardButton } from '../../../../../components/Buttons/Standard'

import clsx from 'clsx'
import { CustomDialog } from '../../../../../components/Dialog'
import { type Feedback } from '../../../../../@types'
import { type ApplicationError } from '../../../../../exceptions/errors'

export const Stepper = (): React.JSX.Element => {
  const { formData } = useCreateEmployeeForm()
  const [activeStep, setActiveStep] = React.useState(0)
  const [feedback, setFeedback] = useState<Feedback>({
    title: '',
    type: '',
    msg: '',
    onScreen: false,
  })

  const ref = useRef<HTMLDialogElement>(null)
  const onOpenModal = (): void => {
    ref.current?.showModal()
  }

  const [errors, setErrors] = useState<Record<string, string[]> | null>(null)

  const { isLoading, mutate } = useMutation({
    mutationFn: postEmployee,
    onError: (error: ApplicationError) => {
      setFeedback({
        msg: error.getErrorMessage(),
        title: 'Failed to create employee',
        type: 'error',
        onScreen: true,
      })
      onOpenModal()
    },
    onSuccess: () => {
      setFeedback({
        msg: 'Employee created successfully',
        title: 'Employee created',
        type: 'success',
        onScreen: true,
      })
      onOpenModal()
    },
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
    mutate(formData)
  }

  return (
    <div className="flex flex-col w-full gap-6 p-3">
      <CustomDialog ref={ref} feedback={feedback} />
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
          <StandardButton onClick={handleFinish}>
            {isLoading ? (
              <span className="loading loading-dots"></span>
            ) : (
              'Create'
            )}
          </StandardButton>
        ) : (
          <StandardButton onClick={handleNext}>NEXT</StandardButton>
        )}
      </div>
    </div>
  )
}

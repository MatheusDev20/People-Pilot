/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useRef, useState } from 'react'
import { StepOne, StepFour, StepTwo, steps } from '../Steps'
import { useCreateEmployeeForm } from '../../../../../contexts/create-employee-form'
import { validateCurrentStep } from '../../../../../validations/schemas'
import { useMutation, useQuery } from '@tanstack/react-query'
import { postEmployee } from '../../../../../api/employee'
import { StandardButton } from '../../../../../components/Buttons/Standard'

import clsx from 'clsx'
import { CustomDialog } from '../../../../../components/Dialog/SimpleDialog'
import { type ApplicationError } from '../../../../../exceptions/errors'
import { useDialog } from '../../../../../hooks/dialog'
import { StepThree } from '../Steps/Step3'
import { useToast } from '../../../../../hooks/toast'
import { ToastMessage } from '../../../../../components/Toast'
import { getAvailableBanks } from '../../../../../api/banks'

export const Stepper = (): React.JSX.Element => {
  const [creatingLoading, setCreatingLoading] = useState(false)
  const { formData } = useCreateEmployeeForm()
  const [activeStep, setActiveStep] = React.useState(0)

  const ref = useRef<HTMLDialogElement>(null)
  const { dialog, show } = useDialog(ref)
  const { toast, showToast } = useToast()

  const [errors, setErrors] = useState<Record<string, string[]> | null>(null)

  const { mutate, data: createdEmployeeId } = useMutation({
    mutationFn: postEmployee,
    onError: async (error: ApplicationError) => {
      setCreatingLoading(false)
      await showToast({
        message: `Failed to create employee! ${error.message}`,
        type: 'error',
        duration: 15000,
      })

      throw error
    },
    onSuccess: () => {
      setCreatingLoading(false)
      show({
        msg: 'Employee created successfully',
        title: 'Employee created',
        type: 'success',
      })
    },
  })

  const { data: availableBanks } = useQuery({
    queryKey: ['employee'],
    queryFn: getAvailableBanks,
  })

  const getCurrentStep = (currStep: number): JSX.Element | undefined => {
    switch (currStep) {
      case 0:
        return <StepOne errors={errors} />

      case 1:
        return <StepTwo errors={errors} />

      case 2:
        return <StepThree availableBanks={availableBanks} errors={errors} />

      case 3:
        return (
          <StepFour
            errors={errors}
            setErrors={setErrors}
            isLoading={creatingLoading}
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
    setCreatingLoading(true)
    mutate(formData)
  }

  return (
    <div className="flex flex-col w-full gap-6 p-3">
      <ToastMessage message={toast.message} type={toast.type} />
      <CustomDialog
        ref={ref}
        dialogData={dialog}
        redirectUrl={`/app/employee/detail/${createdEmployeeId}`}
      />
      <ul className="steps">
        {steps.map((step) => (
          <li
            className={clsx(
              {
                'step-success':
                  step.stepId < activeStep || formData.stepFour.avatar,
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
          <StandardButton
            disabled={creatingLoading}
            onClick={handleBack}
            size="w-[10%]"
          >
            Previous Step
          </StandardButton>
        )}
        {activeStep === steps.length - 1 ? (
          <StandardButton onClick={handleFinish}>
            {creatingLoading ? (
              <span className="loading loading-dots"></span>
            ) : (
              'Create'
            )}
          </StandardButton>
        ) : (
          <StandardButton onClick={handleNext} size="w-[10%]">
            Next Step
          </StandardButton>
        )}
      </div>
    </div>
  )
}

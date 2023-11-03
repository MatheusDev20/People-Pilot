/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react'
import clsx from 'clsx'
import { Stepper as MuiStepper, Step, StepLabel } from '@mui/material'
import {
  StepFour as FinalStep,
  StepOne,
  StepThree,
  StepTwo,
  steps,
} from '../Steps'
import { useCreateEmployeeForm } from '../../../../../contexts/create-employee-form'
import { validateCurrentStep } from '../../../../../validations/schemas'
import { StepperCheckIcon } from '../../../../../assets/icons'
import { useMutation } from '@tanstack/react-query'
import { postEmployee } from '../../../../../api/employee'
import { StandardButton } from '../../../../../components/Buttons/Standard'

export const Stepper = (): React.JSX.Element => {
  const { formData } = useCreateEmployeeForm()
  const [activeStep, setActiveStep] = React.useState(0)
  const [errors, setErrors] = useState<Record<string, string[]> | null>(null)

  const { isLoading, mutate, isSuccess } = useMutation({
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
            isLoading={isLoading}
            isSucesss={isSuccess}
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
      <MuiStepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => {
          const isStepCompleted =
            activeStep > index || formData.stepThree.avatar
          return (
            <Step key={step.label}>
              <StepLabel
                className="dark:text-white"
                StepIconComponent={
                  isStepCompleted ? StepperCheckIcon : step.icon
                }
              >
                <span
                  className={clsx(
                    isStepCompleted
                      ? 'text-green-500'
                      : 'text-gray-500 dark:text-white',
                  )}
                >
                  {step.label}
                </span>
              </StepLabel>
            </Step>
          )
        })}
      </MuiStepper>
      <div className="flex p-3">{getCurrentStep(activeStep)}</div>
      {/* Reach the final step */}
      {activeStep === steps.length ? (
        <FinalStep />
      ) : (
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
            <StandardButton onClick={handleNext}>Next</StandardButton>
          )}
        </div>
      )}
    </div>
  )
}

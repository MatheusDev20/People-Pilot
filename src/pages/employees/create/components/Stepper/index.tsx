/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react'
import clsx from 'clsx'
import { Button, Stepper as MuiStepper, Step, StepLabel } from '@mui/material'
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

export const Stepper = (): React.JSX.Element => {
  const { formData } = useCreateEmployeeForm()
  const [activeStep, setActiveStep] = React.useState(0)
  const [errors, setErrors] = useState<Record<string, string[]> | null>(null)

  const mutation = useMutation({
    mutationFn: postEmployee,
  })
  const getCurrentStep = (currStep: number): JSX.Element | undefined => {
    switch (currStep) {
      case 0:
        return <StepOne errors={errors} />

      case 1:
        return <StepTwo errors={errors} />

      case 2:
        return <StepThree errors={errors} />
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
    mutation.mutate(formData)
  }
  return (
    <div className="flex flex-col w-full gap-6 p-3 border">
      <MuiStepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => {
          const isStepCompleted = activeStep > index
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
            <Button
              variant="contained"
              className="text-white font-semibold bg-blue-500"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
          )}
          {activeStep === steps.length - 1 ? (
            <Button
              onClick={handleFinish}
              className="text-white font-semibold bg-blue-500"
              variant="contained"
            >
              Finish
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="text-white font-semibold bg-blue-500"
              variant="contained"
            >
              Next
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

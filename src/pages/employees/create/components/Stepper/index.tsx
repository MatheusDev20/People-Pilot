/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from "react";
import { Button, Stepper as MuiStepper, Step, StepLabel } from "@mui/material";
import {
  StepFour as FinalStep,
  StepOne,
  StepThree,
  StepTwo,
  steps,
} from "../Steps";
import { useCreateEmployeeForm } from "../../../../../contexts/create-employee-form";
import { validateCurrentStep } from "../../../../../validations/schemas";

export const Stepper = (): React.JSX.Element => {
  const { formData } = useCreateEmployeeForm();
  const [activeStep, setActiveStep] = React.useState(0);
  const [errors, setErrors] = useState<Record<string, string[]> | null>(null);

  const getCurrentStep = (currStep: number): JSX.Element | undefined => {
    switch (currStep) {
      case 0:
        return <StepOne errors={errors} />;

      case 1:
        return <StepTwo errors={errors} />;

      case 2:
        return <StepThree errors={errors} />;
    }
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNext = async (): Promise<void> => {
    const { veredict, errors } = await validateCurrentStep(
      formData,
      activeStep,
    );
    if (!veredict) {
      setErrors(errors);
      return;
    }
    setErrors(null);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div className="flex flex-col w-full gap-6 p-3">
      <MuiStepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={`label-${index}`}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </MuiStepper>
      <div className="flex p-3">{getCurrentStep(activeStep)}</div>
      {/* Reach the final step */}
      {activeStep === steps.length ? (
        <FinalStep />
      ) : (
        <div className="items-center justify-center flex">
          <div className="flex w-1/4 justify-between p-2">
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
            <Button
              onClick={handleNext}
              className="text-white font-semibold bg-blue-500"
              variant="contained"
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

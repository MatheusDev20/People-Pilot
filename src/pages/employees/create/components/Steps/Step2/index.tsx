import {
  PersonIcon,
  LockIcon,
  DepartmentIcon,
} from "../../../../../../assets/icons";
import { CustomInput } from "../../../../../../components/Inputs/Standard";
import { CustomSelect } from "../../../../../../components/Inputs/Select";
import { useCreateEmployeeForm } from "../../../../../../contexts/create-employee-form";
import React from "react";

interface Props {
  errors: Record<string, string[]> | null;
}
export const StepTwo = ({ errors }: Props): React.JSX.Element => {
  const { formData, setFormData } = useCreateEmployeeForm();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      stepTwo: { ...formData.stepTwo, [e.target.name]: e.target.value },
    });
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFormData({
      ...formData,
      stepTwo: { ...formData.stepTwo, [e.target.name]: e.target.value },
    });
  };
  return (
    <div className="flex flex-col gap-5 w-full items-start ml-10">
      <div className="flex gap-3 w-full p-1.5">
        <CustomSelect
          onChange={(e) => {
            handleSelect(e);
          }}
          wSize="medium"
          name="department"
          error={errors ? errors.department : null}
          icon={<DepartmentIcon />}
          label="Departamento"
          placeholder="Select an Department..."
        />
        <CustomInput
          onChange={(e) => {
            handleInput(e);
          }}
          name="password"
          type="password"
          error={errors ? errors.password : null}
          wSize="medium"
          icon={<LockIcon />}
          placeholder="@stx password access..."
          label="Password Acesss"
        />
      </div>
      <div className="flex gap-3 w-full p-1.5">
        {/* TODO: Should be Dynamic and load the available positions for the selected department */}
        <CustomSelect
          onChange={(e) => {
            handleSelect(e);
          }}
          name="position"
          error={errors ? errors.position : null}
          wSize="medium"
          icon={<PersonIcon />}
          placeholder="Select the employee position"
          label="Position"
        />
        <CustomInput
          onChange={(e) => {
            handleInput(e);
          }}
          name="hireDate"
          value={formData.stepTwo.hireDate}
          mask="99/99/9999"
          error={errors ? errors.hireDate : null}
          wSize="medium"
          icon={<PersonIcon />}
          placeholder="01/12/2023..."
          label="Hire Date"
        />
      </div>
    </div>
  );
};

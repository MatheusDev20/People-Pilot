import { CustomInput, CustomSelect } from '../../../../../../components/Inputs'
import { hasMask } from '../../../../../../components/Inputs/Masks'
import { useCreateEmployeeForm } from '../../../../../../contexts/create-employee-form'

interface Props {
  errors: Record<string, string[]> | null
}
export const StepThree = ({ errors }: Props): JSX.Element => {
  const { formData, setFormData } = useCreateEmployeeForm()

  const handleStepChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    const name = e.target.name
    const mask = hasMask(name)
    const value = mask ? mask(e.target.value) : e.target.value
    console.log(value)
    setFormData({
      ...formData,
      stepThree: {
        ...formData.stepThree,
        [name]: value,
      },
    })
  }

  return (
    <div className="w-full flex flex-col gap-5 p-12">
      {/* BankName and AccountType */}
      <div className="flex w-full">
        <CustomInput
          wSize="medium"
          name="bankName"
          onChange={handleStepChange}
          value={formData.stepThree.bankName}
          error={errors ? errors.bankName : null}
          label="Bank Name"
          placeholder="Itau Unibanco SA..."
          type="text"
        />
        {/* Email */}
        <CustomSelect
          name="accountType"
          value={formData.stepThree.accountType}
          onChange={handleStepChange}
          wSize="medium"
          error={errors ? errors.accountType : null}
          options={['CORRENTE', 'POUPANÇA']}
          label="Account Type"
          placeholder="Selecione o tipo de conta (Corrente/Poupança)"
        />
      </div>

      {/* Rest of the informations */}
      <div className="flex w-full">
        <CustomInput
          wSize="medium"
          name="accountNumber"
          onChange={handleStepChange}
          value={formData.stepThree.accountNumber}
          error={errors ? errors.accountNumber : null}
          label="Account Number"
          placeholder="Account number with no special characters..."
          type="text"
        />
        <CustomInput
          wSize="medium"
          name="agencyNumber"
          onChange={handleStepChange}
          value={formData.stepThree.agencyNumber}
          error={errors ? errors.agencyNumber : null}
          label="Agency Number"
          placeholder="XXXX-X..."
          type="text"
        />
        <CustomInput
          wSize="medium"
          name="pixKey"
          onChange={handleStepChange}
          value={formData.stepThree.pixKey}
          error={errors ? errors.pixKey : null}
          label="Pix Key..."
          placeholder="Pix Key..."
          type="text"
        />
      </div>
    </div>
  )
}

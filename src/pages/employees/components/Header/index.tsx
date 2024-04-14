import React from 'react'

import { CustomInput } from '../../../../components/Inputs'
import { PlusButton } from '../Buttons/buttons'
import { PlusUser } from '../../../../assets/svgs/plus'

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Header = ({ handleChange }: Props): React.JSX.Element => {
  return (
    <header className="items-center md:gap-6 w-full p-8 flex justify-between">
      <CustomInput
        type="text"
        label="Search for employee..."
        error={null}
        onChange={handleChange}
        placeholder="Ryan Howard..."
        wSize="large"
      />
      <div className="flex gap-20 p-2 items-center justify-center place-self-end w-[30%]">
        <PlusButton
          text="Adicionar"
          icon={<PlusUser />}
          routeTo="/app/employee/create"
        />
      </div>
    </header>
  )
}

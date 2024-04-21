import { CustomSelect } from '@/components/Inputs'
import Select from 'react-select/dist/declarations/src/Select'

export const DocumentForm = (): JSX.Element => {
  return (
    <div className="flex">
      <CustomSelect
        label="Tipo do documento"
        wSize="small"
        options={['a', 'b']}
        error={null}
        placeholder="Selecione o tipo do documento para fazer upload..."
      />
    </div>
  )
}

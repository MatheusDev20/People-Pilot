import { type PersonalDocuments } from '@/@types'
import { DocumentBox } from '../components/DocumentBox'
import { PlusAdd } from '@/assets/svgs/add'

type Props = {
  data: PersonalDocuments[]
}

export const DocumentsData = ({ data }: Props): JSX.Element => {
  return (
    <div className="flex flex-col gap-12">
      <header className="flex gap-2 items-center cursor-pointer group">
        <PlusAdd classStyles="transition ease-in-out delay-75 w-6 h-6 text-twitter-blue-main group-hover:text-twitter-blue-secondary group-hover:-translate-y-1" />
        <span className="group-hover:text-twitter-blue-secondary group-hover:-translate-y-1 transition ease-in-out delay-75">
          Novo Documento
        </span>
      </header>
      <div className="flex flex-col gap-8">
        {data.map((document) => (
          <DocumentBox key={document.id} data={document} />
        ))}
      </div>
    </div>
  )
}

import { type PersonalDocuments } from '@/@types'
import { DocumentBox } from '../components/DocumentBox'

type Props = {
  data: PersonalDocuments[]
}

export const DocumentsData = ({ data }: Props): JSX.Element => {
  return (
    <div className="flex flex-col gap-8">
      {data.map((document) => (
        <DocumentBox key={document.id} data={document} />
      ))}
    </div>
  )
}

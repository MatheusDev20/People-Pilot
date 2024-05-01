import { DocumentBox } from '../components/DocumentBox'
import { PlusAdd } from '@/assets/svgs/add'
import { GenericModal } from '@/components/Modal'
import { useRef } from 'react'
import { DocumentForm } from '../components/DocumentForm'
import { type Employee } from '@/@types/employees'
import { useToast } from '@/hooks/toast'
import { ToastMessage } from '@/components/Toast'

type Props = {
  data: Employee
}

export const DocumentsData = ({ data }: Props): JSX.Element => {
  const ref = useRef<HTMLDialogElement>(null)
  const { toast, showToast } = useToast()
  const onOpenModal = (ref: React.RefObject<HTMLDialogElement>): void => {
    ref.current?.showModal()
  }

  const handleNewDoucment = (): void => {
    onOpenModal(ref)
  }
  return (
    <div>
      <ToastMessage message={toast.message} type={toast.type} />
      <div className="flex flex-col gap-12">
        <header
          className="flex gap-2 items-center cursor-pointer group"
          onClick={handleNewDoucment}
        >
          <PlusAdd classStyles="transition ease-in-out delay-75 w-6 h-6 text-twitter-blue-main group-hover:text-twitter-blue-secondary group-hover:-translate-y-1" />
          <span className="group-hover:text-twitter-blue-secondary group-hover:-translate-y-1 transition ease-in-out delay-75">
            Novo Documento
          </span>
        </header>
        <div className="flex flex-col gap-8">
          {data.documents.map((document) => (
            <DocumentBox key={document.id} data={document} />
          ))}
        </div>
      </div>
      {/* TODO: Estado se mantendo após fechar o modal */}
      <GenericModal ref={ref} id="create-document" action="Adicionar Documento">
        <DocumentForm
          employeeId={data.id}
          modalRef={ref}
          showToast={showToast}
        />
      </GenericModal>
    </div>
  )
}

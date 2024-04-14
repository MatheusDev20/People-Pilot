/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { type Department, type Dialog } from '../../@types'
import { getKeysOf } from '../../utils'
import { Table } from '../../components/Table'
import { LoadingDots } from '../../components/Loading/Dots'
import { CustomInput } from '../../components/Inputs'
import { PlusButton } from '../employees/components/Buttons/buttons'
import { BuildingIcon } from '../../assets/svgs/building'
import { useState, type ChangeEvent, useRef } from 'react'
import { NotFound } from '../../components/Exceptions/NotFound'
import { ActionDialog } from '../../components/Dialog/ActionDialog'
import { GenericModal } from '@/components/Modal'
import { ToastMessage } from '@/components/Toast'
import { useToast } from '@/hooks/toast'
import {
  useDepartmentsList,
  useExcludeDepartment,
} from '@/api/departments/department.hooks'
import { CreateForm, EditForm } from './components'
import { useQueryClient } from '@tanstack/react-query'

export const DepartmentsPage = (): JSX.Element => {
  const [row, setRow] = useState<Department | null>(null)

  const { toast, showToast } = useToast()
  const { isLoading: listLoading, data, error } = useDepartmentsList()
  const client = useQueryClient()
  const { mutate, isLoading, isSuccess, isError, reset } = useExcludeDepartment(
    { client },
  )

  const ref = useRef<HTMLDialogElement>(null)
  const editModalRef = useRef<HTMLDialogElement>(null)
  const createModalRef = useRef<HTMLDialogElement>(null)

  const [dialog, setDialog] = useState<Dialog>({
    title: '',
    type: '',
    msg: '',
    action: {
      cb: () => {},
      type: null,
      successMsg: '',
    },
  })

  const onOpenModal = (
    ref: React.RefObject<HTMLDialogElement>,
    data?: Department,
  ): void => {
    if (data) setRow(data)
    ref.current?.showModal()
  }

  const [search, setSearch] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
  }

  const handleEdit = (row: Department): void => {
    onOpenModal(editModalRef, row)
  }

  const handleCreation = (): void => {
    onOpenModal(createModalRef)
  }
  const handleDelete = (row: Department): void => {
    setDialog({
      title: `Are you sure you want to delete ${row.name} Department`,
      msg: 'This action cannot be undone',
      type: 'warning',
      action: {
        cb: () => mutate(row.id),
        type: 'delete',
        successMsg: 'Department deleted successfully!',
      },
    })
    onOpenModal(ref, row)
  }

  const tableHeaders = getKeysOf<Department>(data ? data[0] : undefined, [
    'id',
    'description',
    'employees',
  ])
  if (listLoading)
    return (
      <div className="flex flex-col md:flex-col sm:h-full items-center justify-center max-w-full">
        <LoadingDots size="w-24" />
      </div>
    )

  const filteredData = data
    ?.filter((department) => department.name.includes(search))
    .map((dep) => ({ ...dep, enableDelete: dep?.employees.length !== 0 }))
  return (
    <>
      <ToastMessage message={toast.message} type={toast.type} />
      <ActionDialog
        ref={ref}
        dialogData={dialog}
        action={dialog.action}
        actionState={{ loading: isLoading, success: isSuccess, error: isError }}
        reset={reset}
      />
      <header className="items-center md:gap-6 w-[50%] p-8 flex justify-between">
        <CustomInput
          type="text"
          error={null}
          onChange={handleChange}
          placeholder="Pesquisar por departamento..."
          wSize="large"
        />
        <div className="flex md:gap-20 p-2 place-self-end sm:[w-[25%]] md:w-[50%]">
          <PlusButton
            onClick={handleCreation}
            text="Novo"
            icon={<BuildingIcon />}
          />
        </div>
      </header>
      <div className="overflow-x-auto p-5 flex items-center justify-center border-solid">
        {!error && filteredData?.length ? (
          <>
            <Table
              tableData={{
                head: tableHeaders,
                rows: filteredData,
              }}
              editAction={handleEdit}
              deleteAction={{ fn: handleDelete, enable: true }}
            />
          </>
        ) : (
          <NotFound />
        )}
      </div>
      {/* Modals */}

      {row && (
        <GenericModal
          ref={editModalRef}
          id="edit"
          action="Editar Informações do Departamento"
        >
          {row && (
            <EditForm
              department={row}
              key={row.id}
              showToast={showToast}
              modalRef={editModalRef}
            />
          )}
        </GenericModal>
      )}

      <GenericModal
        ref={createModalRef}
        id="create"
        action="Adicionar novo departamento"
      >
        <CreateForm showToast={showToast} modalRef={createModalRef} />
      </GenericModal>
    </>
  )
}

/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { type Department, type Dialog } from '../../@types'
import { getKeysOf } from '../../utils'
import { Table } from '../../components/Table'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { excludeDepartment, listDepartments } from '../../api/departments'
import { LoadingDots } from '../../components/Loading/Dots'
import { CustomInput } from '../../components/Inputs'
import { PlusButton } from '../employees/components/Buttons/buttons'
import { BuildingIcon } from '../../assets/svgs/building'
import { useState, type ChangeEvent, useRef } from 'react'
import { NotFound } from '../../components/Exceptions/NotFound'
import { CustomDialog } from '../../components/Dialog'
import { useNavigate } from 'react-router-dom'

export const DepartmentsPage = (): JSX.Element => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const {
    isLoading: listLoading,
    data,
    error,
  } = useQuery({
    queryKey: ['departments'],
    queryFn: listDepartments,
  })
  const { mutate, isLoading, isSuccess, isError, reset } = useMutation({
    mutationFn: excludeDepartment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['departments'] })
    },
  })

  const ref = useRef<HTMLDialogElement>(null)
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

  const onOpenModal = (): void => {
    ref.current?.showModal()
  }
  const [search, setSearch] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
  }
  const handleEdit = (row: Department): void => {
    navigate(`/app/departments/edit/${row.id}`, {
      state: { department: row },
    })
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
    onOpenModal()
  }

  const tableHeaders = getKeysOf<Department>(data ? data[0] : undefined, [
    'id',
    'description',
  ])

  if (listLoading)
    return (
      <div className="flex flex-col md:flex-col sm:h-full items-center justify-center max-w-full">
        <LoadingDots size="w-24" />
      </div>
    )

  const filteredData = data
    ?.filter((department) => department.name.includes(search))
    .map((dep) => ({ ...dep, enableDelete: dep.activeEmployees !== 0 }))
  return (
    <>
      <CustomDialog
        ref={ref}
        dialogData={dialog}
        action={dialog.action}
        actionState={{ loading: isLoading, success: isSuccess, error: isError }}
        reset={reset}
      />
      <header className="items-center md:gap-6 w-full p-8 flex justify-between">
        <CustomInput
          type="text"
          label="Search for department name ..."
          error={null}
          onChange={handleChange}
          placeholder="Sales..."
          wSize="large"
        />
        <div className="flex gap-20 p-2 items-center justify-center place-self-end w-[30%]">
          <PlusButton
            text="NEW DEPARTMENT"
            icon={<BuildingIcon />}
            routeTo="/app/departments/create"
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
    </>
  )
}

import { type Department, type Manager } from '../../@types'
import { isManager } from '../../@types/guards'
import { PenIcon } from '../../assets/svgs/pen'
import { TrashIcon } from '../../assets/svgs/trash'

type TableData<T> = {
  head: Array<keyof T>
  rows: T[]
}

export type TableProps<T> = {
  tableData: TableData<T>
  editAction: (row: T) => void
  deleteAction: {
    fn: (row: T) => void
    enable: boolean
  }
}

export const Table = <T extends object>({
  tableData,
  editAction,
  deleteAction,
}: TableProps<T>): JSX.Element => {
  return (
    <table className="table flex">
      {/* head */}
      <thead>
        <tr>
          {tableData.head.map((hd, index) => (
            <th key={String(hd) + index}>
              <div className="flex justify-center">
                <span className="text-lg">
                  {String(hd).charAt(0).toUpperCase() + String(hd).slice(1)}
                </span>
              </div>
            </th>
          ))}
          <th>
            <div>
              <div className="flex justify-center">
                <span className="text-lg">Actions</span>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData.rows.map((row: T, rowIndex: number) => (
          <tr key={rowIndex}>
            {tableData.head.map((col, colIndex) => (
              <td
                key={colIndex}
                className="p-6 border-solid border-neutral border-b"
              >
                {col === 'manager' && isManager(row[col]) ? (
                  <div className="flex justify-center gap-4">
                    <img
                      src={(row[col] as Manager).avatar}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer ml-4"
                      alt="manager_avatar"
                    />

                    <span className="text-lg">
                      {(row[col] as Manager).name}
                    </span>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <span className="text-lg">{String(row[col])}</span>
                  </div>
                )}
              </td>
            ))}
            <td className="p-6 border-solid border-neutral border-b">
              <div className="flex justify-center">
                <div className="flex gap-8">
                  <button
                    className="bg-transparent"
                    onClick={() => {
                      editAction(row)
                    }}
                  >
                    <PenIcon />
                  </button>
                  <button
                    disabled={(row as Department).enableDelete}
                    className="bg-transparent"
                    onClick={() => {
                      deleteAction.fn(row)
                    }}
                  >
                    <TrashIcon disabled={(row as Department).enableDelete} />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

import { PenIcon } from '../../assets/svgs/pen'
import { TrashIcon } from '../../assets/svgs/trash'

type TableData<T> = {
  head: string[]
  rows: T[]
}

export type TableProps<T> = {
  tableData: TableData<T>
  editAction: (row: T) => void
  deleteAction: (row: T) => void
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
          {tableData.head.map((hd) => (
            <th key={hd}>
              <div className="flex justify-center">
                <span className="text-lg">
                  {hd.charAt(0).toUpperCase() + hd.slice(1)}
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
            {tableData.head.map((col: string, colIndex: number) => (
              <>
                <td
                  key={colIndex}
                  className="p-6 border-solid border-neutral border-b"
                >
                  <div className="flex justify-center">
                    <span className="text-lg">
                      {String(row[col as keyof T])}
                    </span>
                  </div>
                </td>
              </>
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
                    className="bg-transparent"
                    onClick={() => {
                      deleteAction(row)
                    }}
                  >
                    <TrashIcon />
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

type TableData<T> = {
  head: string[]
  rows: T[]
}

export type TableProps<T> = {
  tableData: TableData<T>
}

export const Table = <T extends object>({
  tableData,
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
              <td key={colIndex}>
                <div className="flex justify-center">
                  <span className="text-lg">{String(row[col as keyof T])}</span>
                </div>
              </td>
            ))}
            <td>
              <div className="flex justify-center">
                <span className="text-lg">Actions</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

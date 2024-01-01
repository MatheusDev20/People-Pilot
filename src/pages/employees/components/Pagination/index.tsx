import { type Employee } from '../../../../@types/employees'

type Props = {
  page: number
  setCurrentPage: (page: number) => void
  currentData: Employee[]
}

export const Pagination = ({
  page,
  setCurrentPage,
  currentData,
}: Props): JSX.Element => {
  const next = (): void => {
    setCurrentPage(page + 1)
  }

  const previous = (): void => {
    setCurrentPage(page - 1)
  }
  return (
    <footer className="flex w-full items-center justify-center">
      <div className="join grid grid-cols-2 gap-6">
        {page !== 1 && (
          <button
            onClick={previous}
            className="join-item btn btn-outline hover:bg-twitter-blue-secondary hover:border-none hover:text-white"
          >
            Previous page
          </button>
        )}
        {currentData.length === 8 && (
          <button
            onClick={next}
            className="join-item btn btn-outline hover:bg-twitter-blue-secondary hover:border-none hover:text-white"
          >
            Next page
          </button>
        )}
      </div>
    </footer>
  )
}

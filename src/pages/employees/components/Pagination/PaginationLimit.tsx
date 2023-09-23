export const PaginationLimit = () => {
  return (
    <section className="flex gap-3 items-center">
      <p className="text-gray-950 font-semibold">View</p>
      <input
        type="number"
        className="peer block min-h-[auto] w-[15%] bg-white rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
      />
      <p className="text-gray-950 font-semibold">Employees per page</p>
      <button className="bg-blue-600 text-white rounded hover:border-transparent hover:bg-blue-500 w-[15%] py-1 flex items-center justify-center">
        <span className=" text-sm font-semibold">Apply</span>
      </button>
    </section>
  )
}

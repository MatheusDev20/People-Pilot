type Props = {
  label: string
  info: string
}
export const SingleInfoDisplay = ({ label, info }: Props): JSX.Element => {
  return (
    <div className="flex gap-3 wd]">
      <div className="flex flex-col gap-2 p-2 w-[80%]">
        <span>{label}</span>
        {/* Info */}
        <section className="bg-base-300 border border-neutral px-4 py-4 rounded-lg">
          {info}
        </section>
      </div>
    </div>
  )
}

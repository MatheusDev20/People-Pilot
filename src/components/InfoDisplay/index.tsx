const wTypes = {
  full: 'w-full',
  half: 'w-1/2',
  third: 'w-1/3',
  fourth: 'w-1/4',
  fifth: 'w-1/5',
  sixth: 'w-1/6',
}

type Props = {
  label: string
  info: string
  width: keyof typeof wTypes
}
export const SingleInfoDisplay = ({
  label,
  info,
  width,
}: Props): JSX.Element => {
  return (
    <div className="flex gap-3">
      <div className={`flex flex-col gap-2 p-2 ${wTypes[width]}`}>
        <span>{label}</span>
        {/* Info */}
        <section className="bg-base-300 border border-neutral px-4 py-4 rounded-lg">
          {info}
        </section>
      </div>
    </div>
  )
}

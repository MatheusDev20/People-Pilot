import { type AccordionElement } from '../../@types'
import { SingleInfoDisplay } from '../InfoDisplay'
// import { InfoLabel } from '../../pages/employees/detail/components/InfoLabel'

type Props = {
  title: string
  accordionValues: AccordionElement[]
}

export const Accordion = ({ title, accordionValues }: Props): JSX.Element => {
  return (
    <div className="collapse collapse-arrow border border-base-300 bg-base-100">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        <span className="dark: text-white font-semibold">{title}</span>
      </div>
      <div className="collapse-content">
        <div className="flex w-full p-3 flex-col gap-3">
          {accordionValues.map((value: AccordionElement) => (
            <SingleInfoDisplay
              key={value.order}
              label={value.label}
              info={value.info}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

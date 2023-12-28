import Default from '../../../../assets/imgs/fake-avatar1.png'
type Props = {
  img: any
  data: string
}

export const OptionIcon = ({ imgUrl }: { imgUrl: string }): JSX.Element => {
  const url = imgUrl ?? Default
  return <img className="object-cover w-8 h-8 rounded-full" src={url} />
}

export const CustomOption = ({ img, data }: Props): JSX.Element => {
  return (
    <div className="flex items-center gap-3">
      {img}
      <span className="text-white">{data}</span>
    </div>
  )
}

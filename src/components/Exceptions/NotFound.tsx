import NotFoundPNG from '../../assets/imgs/404.png'

export const NotFound = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center">
      <span className="text-4xl dark:text-white">Nothing found here</span>
      <img className="h-96 w-96 object-cover" src={NotFoundPNG} />
    </div>
  )
}

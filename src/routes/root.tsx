import { Outlet } from 'react-router-dom'
import BaseLayout from '../layout'

export const Root = (): JSX.Element => {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  )
}

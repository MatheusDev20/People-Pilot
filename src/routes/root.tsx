import { Outlet } from "react-router-dom"
import BaseLayout from "../layout"


export const Root = () => {
  return (
    <BaseLayout>
      <Outlet />
   </BaseLayout>
  )
}
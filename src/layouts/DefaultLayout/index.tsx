import { Outlet } from 'react-router'
import { Layout } from './Layout'

export function DefaultLayout() {
  return (
    <>
      <Layout />
      <Outlet />
    </>
  )
}

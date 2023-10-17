import { Footer } from '@/layouts/DefaultLayout/components/Footer'
import { Header } from '@/layouts/DefaultLayout/components/Header'
import { Outlet } from 'react-router'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

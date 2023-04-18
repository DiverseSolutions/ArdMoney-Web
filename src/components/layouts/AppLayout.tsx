import { Outlet } from "react-router-dom";
import AppNavbar from '@components/AppNavbar'
import Footer from '@components/Footer'
import PageContainer from '@components/layouts/PageContainer'

export default function AppLayout(){
  return (
    <div className="flex min-h-screen w-full">
      <div className='flex flex-col w-full bg-black'>
        <AppNavbar />

        <PageContainer>
          <Outlet />
        </PageContainer>

        <Footer />
      </div>
    </div>
  )
}

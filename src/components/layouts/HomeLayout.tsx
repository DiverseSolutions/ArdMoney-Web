import { Outlet } from "react-router-dom";
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

export default function HomeLayout(){
  return (
    <div className="flex w-full">
      <div className='flex flex-col w-full bg-black'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

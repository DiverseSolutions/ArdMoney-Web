import Background1 from '@assets/images/swap/background1.svg'
import Background2 from '@assets/images/swap/background2.svg'
import clouds_left from '@assets/images/swap/clouds_left.svg'
import gradient_left from '@assets/images/swap/gradient_left.svg'
import clouds_right from '@assets/images/swap/clouds_right.svg'
import gradient_right from '@assets/images/swap/gradient_right.svg'

import { DefaultLayoutProp } from "types/LayoutTypes" 

export default function ModalLayout({ children,handleModalClose } : DefaultLayoutProp) {

  return (
    <div className="px-base md:px-0 py-base flex justify-center w-full">
      <div data-aos="fade-up" className='relative z-10 bg-black flex flex-col gap-xl p-xl min-h-auto card-gradient-dark rounded-lg'>
        { children }
      </div>

      <div className="absolute top-0 left-0 w-full h-full cursor-pointer z-8" onClick={handleModalClose}></div>

      <img src={Background1} alt="" className='absolute left-0 z-4' />
      <img src={Background2} alt="" className='absolute right-0 z-4' />
      <img src={clouds_left} alt="" className='absolute left-0 z-4' />
      <img src={gradient_left} alt="" className='absolute left-0 z-4' />

      <img src={clouds_right} alt="" className='absolute right-0 z-4' />
      <img src={gradient_right} alt="" className='absolute right-0 z-4' />
    </div>
  )
}

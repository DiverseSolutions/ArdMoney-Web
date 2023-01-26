import React from 'react'
import Reload from '../assets/icons/reload.svg'
import Menu from '../assets/icons/menu.svg'
import Chevron_R from '../assets/icons/right_chevron.svg'
import Switch from '../assets/icons/switch.svg'
import Info from '../assets/icons/info.svg'
import Chevron_D from '../assets/icons/down_chevron.svg'
import Background1 from '../assets/images/swap/background1.svg'
import Background2 from '../assets/images/swap/background2.svg'
import clouds_left from '../assets/images/swap/clouds_left.svg'
import gradient_left from '../assets/images/swap/gradient_left.svg'
import clouds_right from '../assets/images/swap/clouds_right.svg'
import gradient_right from '../assets/images/swap/gradient_right.svg'
import persona from '../assets/images/swap/persona.svg'

export default function Swap() {
  return (
	<div className="flex justify-center items-center min-h-screen w-full">
		<div className='flex flex-col p-2xl w-[423px] card-gradient-dark rounded-lg mb-16 z-10'>
			<div className='flex justify-between w-full mb-lg'>
				<div className='flex items-center text-white gap-sm'>
					<div className='p-2 border border-white/10 rounded-md'>
						<img src={Reload} alt=""/>
					</div>
					<span className='font-lg'>Swap</span>
				</div>
				<div>
					<div className='p-2 border border-white/10 rounded-md'>
						<img src={Menu} alt=""/>
					</div>
				</div>
			</div>
			<div className='flex justify-between w-full text-white/60 text-sm mb-base'>
				<span>You send</span>
				<div className='flex gap-2'>
					<span>Balance: </span>
					<span className='text-white'>0.000</span>
				</div>
			</div>
			<div className='flex justify-between items-center w-full border border-primary/20 rounded-lg text-white p-sm mb-sm'>
				<div className='flex justify-between items-center p-sm rounded-lg w-5/12 bg-primary/20'>
					<span>Select Token</span>
					<img src={Chevron_R} alt=""/>
				</div>
				<span className='text-xl'>0.000</span>
			</div>

			<span className='text-white/60 text-sm mb-lg'>0.00</span>

			<div className='flex w-full justify-center mb-lg'>
				<div className='flex p-base border border-white/10 rounded-md'>
					<img src={Switch} alt=""/>
				</div>
			</div>

			<div className='flex justify-between w-full text-white/60 text-sm mb-base'>
				<span>You recieve</span>
				<div className='flex gap-2'>
					<span>Balance: </span>
					<span className='text-white'>0.000</span>
				</div>
			</div>
			<div className='flex justify-between items-center w-full border border-primary/20 rounded-lg text-white p-sm mb-sm'>
				<div className='flex justify-between items-center p-sm rounded-lg w-5/12 bg-primary/20'>
					<span>Select Token</span>
					<img src={Chevron_R} alt=""/>
				</div>
				<span className='text-xl'>0.000</span>
			</div>

			<span className='text-white/60 text-sm mb-lg'>0.00</span>

			<div className='flex justify-between w-full mb-lg'>
				<div className='flex items-center text-sm gap-xs'>
					<div className='p-2 border border-white/10 rounded-md'>
						<img src={Info} alt=""/>
					</div>
					<span className='text-white'>1 USDT = 3,407.00 MONT</span>
					<span className='text-white/60'>(₮1.00)</span>
				</div>
				<div className='p-2 border border-white/10 rounded-md'>
					<img src={Chevron_D} alt=""/>
				</div>
			</div>

			<button className='bg-primary py-[14px] px-base rounded-lg'>
				<span className='text-white text-base'>Connect Wallet</span>
			</button>
		</div>
		<img src={Background1} alt="" className='absolute left-0' />
		<img src={Background2} alt="" className='absolute right-0' />
		<img src={clouds_left} alt="" className='absolute left-0' />
		<img src={gradient_left} alt="" className='absolute left-0' />
		
		<img src={clouds_right} alt="" className='absolute right-0' />
		<img src={gradient_right} alt="" className='absolute right-0' />
		<img src={persona} alt="" className='absolute right-0' />
		
	</div>
  )
}

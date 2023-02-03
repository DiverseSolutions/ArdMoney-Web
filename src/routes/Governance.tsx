import Info from '../assets/icons/info.svg'
import Ghosts from '../assets/governance/ghosts.svg'
import Logo1 from '../assets/governance/logo1.svg'
import Logo2 from '../assets/governance/logo2.svg'
import Logo3 from '../assets/governance/logo3.svg'
import Ellipse from '../assets/governance/ellipse.svg'
import Share from '../assets/governance/share.svg'
import Copy from '../assets/governance/copy.svg'


export default function Governance() {
  return (
	<div className="relative flex justify-center min-h-screen w-full">
		<div className='flex flex-col w-full max-w-6xl sm:mb-xl md:mb-2xl z-10 p-6 lg:p-0'>
			<span className='text-2xl lg:text-4xl text-light font-extrabold lg:mt-xl mb-sm lg:mb-lg'>Governance</span>
			<div className='flex flex-col w-full border rounded-lg bg-gradient-to-r from-[#8362FD] to-[#3FE600] p-[1px] text-white'>
				<div className='relative flex flex-col staking-header-gradient p-lg w-full h-full bg-black rounded-lg'>
					<div className='flex flex-col w-full z-10 lg:w-5/12 text-light/60 text-sm gap-lg'>
						<div className='flex gap-base'>
						<img src={Info} alt="" className='flex self-start pt-[1px] items-start'/>  
						<span>In CERO governance, the xCERO token you hold is itself a voting right.</span>
						</div>
						<div className='flex gap-base'>
						<img src={Info} alt="" className='flex self-start pt-[1px] items-start'/>  
						<span>CERO DAO uses Snapshot to store data in a decentralized way, making it easy to verify user votes. And you don't have to pay any fees to participate in the discussion, it's enough to be a token holder.</span>
						</div>
						<div className='flex gap-base'>
						<img src={Info} alt="" className='flex self-start pt-[1px] items-start'/>  
						<span>There are 2 steps to submitting an issue to CERO DAO. First, CERO will discuss the open discussion section, and if the problem or solution is considered by the public or the CERO team needs to be put forward for governance, the DAO vote will officially begin.</span>
						</div>
						<div className='flex gap-base'>
						<img src={Info} alt="" className='flex self-start pt-[1px] items-start'/>  
						<span>Dear CERO token holder, if you have a great idea for the development of CERO, please post it on the CERO forum and share your ideas with others. Your new ideas can bring wnoderful changes</span>
						</div>
						<div className='flex gap-base'>
						<img src={Info} alt="" className='flex self-start pt-[1px] items-start'/>  
						<span>YOU MUST HAVE YOUR xCERO TOKENS PLACED IN YOUR WALLET BEFORE YOU START VOTING. Snapshot will register your wallet before voting starts, and if you deposit tokens after voting starts, you will not be eligible to vote.</span>
						</div>
					</div>
					<img src={Ghosts} alt="" className='absolute right-0 bottom-0' />
					<img src={Logo1} alt="" className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-0' />
					<img src={Logo2} alt="" className='absolute right-0 top-0' />
					<img src={Logo3} alt="" className='absolute right-0 bottom-0' />
					<img src={Ellipse} alt="" className='absolute left-0 bottom-0' />
				</div>
			</div>
			
			<span className='font-extrabold text-xl text-white mt-16 mb-6'>VOTES</span>

			<div className='flex gap-sm text-white w-full md:w-1/2'>
				<button className='bg-primary py-sm w-1/3 text-center rounded-lg'>
					<span>All</span>
				</button>
				<button className='bg-primary/10 py-sm w-1/3 text-center rounded-lg'>
					<span>Active</span>
				</button>
				<button className='bg-primary/10 py-sm w-1/3 text-center rounded-lg'>
					<span>Finished</span>
				</button>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
				<div className='flex flex-col border border-[#ABFC86] p-6 rounded-lg '>
					<div className='flex justify-between w-full'>
						<div className='flex justify-between gap-2 text-white items-center'>
							<button className='p-2 border border-white/10 rounded-md cursor-pointer'>
								<img src={Share} alt=""/>
							</button>
							<button className='p-2 border border-white/10 rounded-md cursor-pointer'>
								<img src={Copy} alt=""/>
							</button>
							<span className='text-base text-white/60'>0x23D...6Cf20</span>
						</div>
						<button className='bg-[#ABFC86] p-sm text-black rounded-lg'>
							Completed
						</button>
					</div>
					<button className='text-left mt-6 text-xl font-extrabold text-white'>Ardmoney токены нэрийг CERO болгон өөрчлөх</button>
					<span className='mt-4 text-white/60 text-base'>### Хураангуй * Ardmoney токены нэр нь “CERO” болж шинэчлэгдэнэ * ArdMoney Prot</span>
					<div className='flex flex-col text-sm text-light/60 border border-primary/10 rounded-lg mt-6 sm:px-3 py-2 gap-xs'>
						<div className='flex justify-between w-full border-b border-primary/10 p-1'>
							<span>Total votes:</span>
							<div className='flex items-center gap-sm text-light'>
							<span>1</span>
							</div>
						</div>
						<div className='flex justify-between w-full border-b border-primary/10 p-1'>
							<span>Required votes:</span>
							<div className='flex items-center gap-sm text-light'>
							<span>100 xARDM</span>
							</div>
						</div>
						<div className='flex justify-between w-full border-b border-primary/10 p-1'>
							<span>Token:</span>
							<div className='flex items-center gap-sm text-light'>
							<span>xARDM</span>
							</div>
						</div>
						<div className='flex justify-between w-full p-1'>
							<span>Starting date:</span>
							<div className='flex items-center gap-sm text-light'>
							<span>2022.12.5 15:11</span>
							</div>
						</div>
						<div className='flex justify-between w-full p-1'>
							<span>Due date:</span>
							<div className='flex items-center gap-sm text-light'>
							<span>2022.12.5 18:00</span>
							</div>
						</div>
					</div>
					<div className='flex flex-col bg-[#ABFC8633] py-[14px] mt-6 px-base rounded-lg gap-4'>
						<div className='flex w-full justify-between text-white'>
							<span className='text-xl font-extrabold'>Positive Votes</span>
							<span className='text-xl font-normal'>100%</span>
						</div>
						<div className='w-full h-2 bg-[#ABFC86] rounded-lg'></div>
						<div className='flex w-full justify-between text-white'>
							<span className='text-base font-normal'>Total Votes</span>
							<span className='text-base font-normal'>1,900</span>
						</div>
					</div>
					<div className='flex flex-col bg-white/10 py-[14px] mt-6 px-base rounded-lg gap-4'>
						<div className='flex w-full justify-between text-white'>
							<span className='text-xl font-extrabold'>Negative Votes</span>
							<span className='text-xl font-normal'>0%</span>
						</div>
						{/* <div className='w-full h-2 bg-[#ABFC86] rounded-lg'></div> */}
						<div className='flex w-full justify-between text-white'>
							<span className='text-base font-normal'>Total Votes</span>
							<span className='text-base font-normal'>1,900</span>
						</div>
					</div>
					<div className='flex justify-between w-full text-white text-sm mt-8'> 
						<span className='text-white/60'>Required votes:</span>
						<span>1900 / 100 ARDM</span>
					</div>
					<div className='h-[1px] mt-3 bg-white/60'></div>
					<span className='text-center text-white mt-4'>Forum Discussion</span>
				</div>
				
				<div className='flex flex-col border border-[#ABFC86] p-6 rounded-lg '>
					<div className='flex justify-between w-full'>
						<div className='flex justify-between gap-2 text-white items-center'>
							<button className='p-2 border border-white/10 rounded-md cursor-pointer'>
								<img src={Share} alt=""/>
							</button>
							<button className='p-2 border border-white/10 rounded-md cursor-pointer'>
								<img src={Copy} alt=""/>
							</button>
							<span className='text-base text-white/60'>0x23D...6Cf20</span>
						</div>
						<button className='bg-[#ABFC86] p-sm text-black rounded-lg'>
							Completed
						</button>
					</div>
					<button className='text-left mt-6 text-xl font-extrabold text-white'>Ardmoney токены нэрийг CERO болгон өөрчлөх</button>
					<span className='mt-4 text-white/60 text-base'>### Хураангуй * Ardmoney токены нэр нь “CERO” болж шинэчлэгдэнэ * ArdMoney Prot</span>
					<div className='flex flex-col text-sm text-light/60 border border-primary/10 rounded-lg mt-6 sm:px-3 py-2 gap-xs'>
						<div className='flex justify-between w-full border-b border-primary/10 p-1'>
							<span>Total votes:</span>
							<div className='flex items-center gap-sm text-light'>
							<span>1</span>
							</div>
						</div>
						<div className='flex justify-between w-full border-b border-primary/10 p-1'>
							<span>Required votes:</span>
							<div className='flex items-center gap-sm text-light'>
							<span>100 xARDM</span>
							</div>
						</div>
						<div className='flex justify-between w-full border-b border-primary/10 p-1'>
							<span>Token:</span>
							<div className='flex items-center gap-sm text-light'>
							<span>xARDM</span>
							</div>
						</div>
						<div className='flex justify-between w-full p-1'>
							<span>Starting date:</span>
							<div className='flex items-center gap-sm text-light'>
							<span>2022.12.5 15:11</span>
							</div>
						</div>
						<div className='flex justify-between w-full p-1'>
							<span>Due date:</span>
							<div className='flex items-center gap-sm text-light'>
							<span>2022.12.5 18:00</span>
							</div>
						</div>
					</div>
					<div className='flex flex-col bg-[#ABFC8633] py-[14px] mt-6 px-base rounded-lg gap-4'>
						<div className='flex w-full justify-between text-white'>
							<span className='text-xl font-extrabold'>Positive Votes</span>
							<span className='text-xl font-normal'>100%</span>
						</div>
						<div className='w-full h-2 bg-[#ABFC86] rounded-lg'></div>
						<div className='flex w-full justify-between text-white'>
							<span className='text-base font-normal'>Total Votes</span>
							<span className='text-base font-normal'>1,900</span>
						</div>
					</div>
					<div className='flex flex-col bg-white/10 py-[14px] mt-6 px-base rounded-lg gap-4'>
						<div className='flex w-full justify-between text-white'>
							<span className='text-xl font-extrabold'>Negative Votes</span>
							<span className='text-xl font-normal'>0%</span>
						</div>
						{/* <div className='w-full h-2 bg-[#ABFC86] rounded-lg'></div> */}
						<div className='flex w-full justify-between text-white'>
							<span className='text-base font-normal'>Total Votes</span>
							<span className='text-base font-normal'>1,900</span>
						</div>
					</div>
					<div className='flex justify-between w-full text-white text-sm mt-8'> 
						<span className='text-white/60'>Required votes:</span>
						<span>1900 / 100 ARDM</span>
					</div>
					<div className='h-[1px] mt-3 bg-white/60'></div>
					<span className='text-center text-white mt-4'>Forum Discussion</span>
				</div>
			</div>
		</div>
	</div>
  );
}

import Search from '@assets/pools/search.svg'
import ARDX from '@assets/pools/ardx.svg'
import MONT from '@assets/pools/mont.svg'

const header = [
	{text: "Name"},
	{text: "TVL"},
	{text: "Base Token"},
	{text: "Paired Token"},
	{text: "24h Volume"},
	{text: "Swap Transaction"},
	{text: "Merged Transaction"},
	{text: "Burned Transaction"},
]

const body = [
	{
		baseImg: MONT,
		pairedImg: ARDX,
		nameBase: "ARDX",
		namePaired: "MONT",
		tvl: "43.49",
		baseToken: "1299.40",
		pairedToken: "1250.54",
		volume: "0",
		swap_transaction: "12",
		merged_transaction: "4",
		burned_transaction: "0"
	},
	{
		baseImg: MONT,
		pairedImg: ARDX,
		nameBase: "ARDX",
		namePaired: "MONT",
		tvl: "43.49",
		baseToken: "1299.40",
		pairedToken: "1250.54",
		volume: "0",
		swap_transaction: "12",
		merged_transaction: "4",
		burned_transaction: "0"
	}
]

export default function Pools() {
  return (
	<div className="flex justify-center min-h-screen w-full ">
      	<div className='flex flex-col w-full max-w-6xl sm:mb-4xl md:mb-2xl z-10 p-6 lg:p-0'>
			<span className='text-2xl lg:text-4xl text-light font-extrabold lg:mt-xl mb-sm lg:mb-lg'>Token pairs</span>
			<div className='flex gap-sm text-white w-full md:w-1/3'>
				<button className='bg-primary py-sm w-1/2 text-center rounded-lg'>
					<span>All</span>
				</button>
				<button className='bg-primary/10 py-sm w-1/2 text-center rounded-lg'>
					<span>My pools</span>
				</button>
			</div>
			<div className='flex w-1/3 px-base py-sm border-2 border-primary/60 rounded-lg mt-lg gap-2 text-white'>
				<img src={Search} alt=""/>
				<input type="tel" placeholder='Search tokens' className='flex w-full bg-transparent outline-none text-base appearance-none placeholder:text-white' />
			</div>
			<table className='flex flex-col p-base border border-primary/30 mt-lg rounded-lg'>
				<thead className='grid grid-cols-8 items-center w-full text-white mb-2'>
					{header.map((item, index) => (
						<span key={index}>{item.text}</span>
					))}
				</thead>
				<tbody>
					{body.map((item, index) => (
						<tr key={index} className="grid grid-cols-8 items-center border-t border-primary/30 text-white py-2 cursor-pointer">
							<td className=' flex flex-col gap-1'>
								<div className='flex items-center gap-1'>
						 			<img src={item.baseImg} alt="" /> <img src={item.pairedImg} alt="" />
						 		</div>
						 		<div>{item.nameBase} / {item.namePaired}</div>
							</td>
							<td>
								{item.tvl}
							</td>
							<td>{item.baseToken}</td>
							<td>{item.pairedToken}</td>
							<td>{item.volume}</td>
							<td>{item.swap_transaction} transfer</td>
							<td>{item.merged_transaction} transfer</td>
							<td>{item.burned_transaction} transfer</td>
						</tr>
					))}
				</tbody>
			</table>
	  	</div>
	</div>
  )
}


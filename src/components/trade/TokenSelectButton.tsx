import ChevronRightIcon from '@assets/icons/ChevronRightIcon'
import { Token } from '@constants/TokenList'

export default function TokenSelectButton({token,clickHandler} : {token: Token | null, clickHandler? : () => void}) {

  return (
    <button className="btn justify-around items-center gap-sm px-4xs py-2xs bg-primary-back min-w-[140px]" onClick={clickHandler}>
      <div className="flex items-center gap-3xs">
        {token != null && (
          <img src={token.logo} className="w-6 h-6" alt="tokenLogo" />
        )}
        <span className="text-base pt-[2px]">{token == null ? "Select Token" : token.symbol}</span>
      </div>
      <ChevronRightIcon style="w-1.5" />
    </button>
  )
}


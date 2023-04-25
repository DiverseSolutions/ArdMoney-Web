import ChevronRightIcon from '@assets/icons/ChevronRightIcon'
import { Token } from '@constants/TokenList'

export default function TokenSelectButton({token,clickHandler} : {token: Token | null, clickHandler? : () => void}) {

  return (
    <button className="btn gap-2xs px-2xs py-2xs bg-primary-back" onClick={clickHandler}>
      <span className="pr-sm">{token == null ? "Select Token" : token.symbol}</span>
      <ChevronRightIcon style="w-1.5 mx-2xs" />
    </button>
  )
}


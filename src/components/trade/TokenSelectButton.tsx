import { Token } from '@constants/TokenList'

export default function TokenSelectButton({token,clickHandler} : {token: Token | undefined, clickHandler? : () => void}) {

  return (
    <button className="btn justify-around items-center gap-sm px-4xs py-2xs bg-primary-back min-w-[140px]" onClick={clickHandler}>
      <div className="flex items-center gap-3xs">
        {token != null && (
          <img src={token.logo} className="w-6 h-6" alt="tokenLogo" />
        )}
        <span className="text-base pt-[2px]">{token ? token.symbol : "Select Token"}</span>
      </div>
      <div className="i-ic-round-chevron-right icon-size-5" />
    </button>
  )
}


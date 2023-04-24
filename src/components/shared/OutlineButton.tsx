import { DefaultOutlineButtonProp } from "types/ButtonTypes";

export default function OutlineButton({ children,disabled,style="gap-base",parentStyle="", clickHandler } : DefaultOutlineButtonProp) {
  const baseStyle = `flex bg-black justify-center p-xs items-center h-full w-full rounded-3xs text-white`;
  const parentBaseStyle = `${handleDisableStyle()} w-full h-full p-[1px] rounded-3xs btn-animation`

  const resultStyle = `${baseStyle} ${style}`
  const resultParentStyle = `${parentBaseStyle} ${parentStyle}`

  return (
    <button onClick={clickHandler} className={resultParentStyle}>
      <div className={resultStyle}>
        { children }
      </div>
    </button>
  )

  function handleDisableStyle(){
    if(disabled) return "pointer-events-none bg-transparent"

    return "bg-gradient"
  }
}

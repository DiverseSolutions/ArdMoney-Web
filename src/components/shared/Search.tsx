import { DefaultSearchProp } from "types/SearchTypes";

export default function Search({ disabled,input,inputChangeHandler,style="gap-base",parentStyle="", clickHandler } : DefaultSearchProp) {
  const baseStyle = `flex bg-black justify-center p-xs items-center h-full w-full rounded-3xs text-white`;
  const parentBaseStyle = `${handleDisableStyle()} w-full h-full p-[1px] rounded-3xs`

  const resultStyle = `${baseStyle} ${style}`
  const resultParentStyle = `${parentBaseStyle} ${parentStyle}`

  return (
    <button onClick={clickHandler} className={resultParentStyle}>
      <div className={resultStyle}>
        <svg className="h-6 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075q-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z"></path></svg>
        <input type="text" value={input} onChange={(e) => { inputChangeHandler(e.target.value)}} className="bg-transparent w-full outline-0" />
      </div>
    </button>
  )

  function handleDisableStyle(){
    if(disabled) return "pointer-events-none bg-transparent"

    return "bg-gradient"
  }
}

export default function OutlineButton({ children , style="" }:{children?: any , style?: string}) {
  const baseStyle = `flex bg-black justify-center p-xs items-center h-full w-full rounded-3xs text-white`;
  const resultStyle = `${baseStyle} ${style}`

  return (
    <button className="w-full h-full bg-gradient p-[1px] rounded-3xs btn-animation">
      <div className={resultStyle}>
        { children }
      </div>
    </button>
  )
}

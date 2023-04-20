import { PageContainerType } from "types/ContainerTypes";

export default function PageContainer({children} : PageContainerType) {
  return (
    <div className='relative flex items-center flex-col w-full bg-black min-h-screen h-full'>
      <div className="flex justify-center w-full max-w-6xl h-auto my-16 text-white">
        {children}
      </div>
    </div>
  )
}
import { PageContainerType } from "types/ContainerTypes";

export default function PageContainer({ children }: PageContainerType) {
  return (
    <div className="relative z-10 flex overflow-hidden items-center flex-col w-full bg-black min-h-screen h-full">
      <div className="flex flex-col justify-center w-full h-auto md:mb-16 md:mt-6 px-4 lg:px-32 text-white">
        {children}
      </div>
    </div>
  );
}

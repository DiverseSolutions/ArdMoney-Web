import { PageContainerType } from "types/ContainerTypes";

export default function PageContainer({ children }: PageContainerType) {
  return (
    <div className="relative flex overflow-hidden items-center flex-col w-full bg-black min-h-screen h-full">
      <div className="flex flex-col justify-center w-full max-w-6xl h-auto md:mb-16 md:mt-6 text-white px-base">
        {children}
      </div>
    </div>
  );
}

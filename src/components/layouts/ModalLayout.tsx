import { DefaultLayoutProp } from "types/LayoutTypes";

export default function ModalLayout(
  { width = "min-w-[423px]",fullHeight = false,alignment = "center" , children, handleModalClose }: DefaultLayoutProp,
) {
  return (
    <div className={`absolute top-0 left-0 px-base md:px-0 flex ${configFullHeight()} ${configAlignment()} w-full h-full`}>
      <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className={`${width} h-auto relative z-10 bg-black flex flex-col gap-xl p-xl card-gradient-dark rounded-lg`}
      >
        {children}
      </div>

      <div
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="9000"
        className="absolute top-0 left-0 w-full h-full cursor-pointer z-8 bg-black opacity-70!"
        onClick={handleModalClose}
      >
      </div>
    </div>
  );

  function configAlignment(){
    switch(alignment){
      case "left":
        return "justify-start"
      case "center":
        return "justify-center"
      case "right":
        return "justify-end"
    }
  }

  function configFullHeight(){
    return fullHeight ? "" : "items-start";
  }
}

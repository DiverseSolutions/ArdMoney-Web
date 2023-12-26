import { DefaultLayoutProp } from "types/LayoutTypes";

export default function ModalLayout({
  width = "w-[90vw] md:w-[500px]",
  fullHeight = false,
  alignment = "center",
  children,
  handleModalClose,
}: DefaultLayoutProp) {
  return (
    <div
      className={`absolute top-0 left-0 px-base md:px-0 flex ${configFullHeight()} ${configAlignment()} overflow-hidden h-full w-full`}
    >
      <div
        data-aos="fade-down"
        className={`${width} h-auto relative z-50 bg-black flex flex-col gap-xl my-xl p-xl card-gradient-dark rounded-lg`}
      >
        {children}
      </div>

      <div
        data-aos="fade-in"
        className="absolute top-0 left-0 w-full h-full cursor-pointer z-8 bg-black opacity-50!"
        onClick={handleModalClose}
      ></div>
    </div>
  );

  function configAlignment() {
    switch (alignment) {
      case "left":
        return "justify-start";
      case "center":
        return "justify-center";
      case "right":
        return "justify-end";
    }
  }

  function configFullHeight() {
    return fullHeight ? "" : "items-start";
  }
}

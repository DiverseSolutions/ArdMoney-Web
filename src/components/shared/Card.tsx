import { NormalCardProp } from "types/CardTypes";

export default function Card({ children, style }: NormalCardProp) {
  const baseStyle = `flex flex-col relative w-full gap-base text-white border border-white/60 p-6 rounded-lg z-10`;
  const resultStyle = `${baseStyle} ${style}`;

  return (
    <div data-aos="fade-up" className={resultStyle}>
      {children}
    </div>
  );
}

import { NormalSvgType } from "types/SvgTypes";

export default function DropdownIcon({ style }: NormalSvgType) {
  const baseStyle = "relative bottom-0.5";
  const resultStyle = baseStyle + " " + style;

  return (
    <svg className={resultStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15l-5-5h10l-5 5Z"></path></svg>
  );
}

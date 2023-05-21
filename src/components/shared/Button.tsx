import { NormalButtonProp } from "types/ButtonTypes";

export default function Button({
  style = "",
  clickHandler,
  children,
}: NormalButtonProp) {
  const resultStyle = `btn btn-animation ${style}`;

  return (
    <button onClick={clickHandler} className={resultStyle}>
      {children}
    </button>
  );
}

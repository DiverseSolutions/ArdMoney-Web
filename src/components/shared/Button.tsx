import { NormalButtonProp } from "types/ButtonTypes";

export default function Button(
  {
    style = "",
    clickHandler,
    children,
  }: NormalButtonProp,
) {
  const resultStyle = `btn ${style}`;

  return (
    <button onClick={clickHandler} className={resultStyle}>
      {children}
    </button>
  );
}

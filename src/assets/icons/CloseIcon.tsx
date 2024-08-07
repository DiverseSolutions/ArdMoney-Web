import { DefaultSvgProp } from "types/SvgTypes";

export default function CloseIcon({ style = "h-lg w-auto" }: DefaultSvgProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={style}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m12 13.4l-4.9 4.9q-.275.275-.7.275q-.425 0-.7-.275q-.275-.275-.275-.7q0-.425.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z"
      ></path>
    </svg>
  );
}

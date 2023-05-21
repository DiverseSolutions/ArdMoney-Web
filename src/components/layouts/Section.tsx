export default function Section({
  children,
  style = "",
}: {
  children: any;
  style?: string;
}) {
  const baseStyle = "flex flex-col w-full h-full gap-xl z-10 my-layout-sm";
  const resultStyle = `${baseStyle} ${style}`;

  return <div className={resultStyle}>{children}</div>;
}

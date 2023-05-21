export default function TextLoader({
  children,
  style = "icon-size-5",
  isLoading = false,
}: {
  children?: React.ReactNode;
  style?: string;
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <div
        className={`i-svg-spinners-3-dots-scale-middle text-white ${style}`}
      />
    );
  }

  return <>{children}</>;
}

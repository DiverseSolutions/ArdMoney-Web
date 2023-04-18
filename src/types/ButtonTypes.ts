export type NormalButtonProp = {
  base?: string,
  weight? : "light" | "normal" | "bold",
  padding?: "none" | "small" | "normal" | "big",
  size?: "small" | "normal" | "big",
  theme?: "primary" | "secondary" | "icon",
  clickHandler?: () => void,
  noAnimation?: boolean,
  children?: React.ReactNode,
  style?: String,
};

export type DropdownButtonProp = {
  text: string,
  padding?: "none" | "small" | "normal" | "big",
  size?: "small" | "normal" | "big",
  theme?: "primary" | "secondary",
  clickHandler?: () => void,
  noAnimation?: boolean,
  style?: string,
};

export type IconButtonProp = {
  fill?: string,
  viewBox: string,
  size?: "small" | "normal" | "big",
  theme?: "primary" | "secondary" | "icon",
  padding?: "none" | "small" | "normal" | "big",
  clickHandler?: () => void,
  noAnimation?: boolean,
  children?: React.ReactNode,
  style?: string,
};

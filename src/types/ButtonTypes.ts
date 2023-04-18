export type NormalButtonProp = {
  base?: string,
  padding?: "none" | "small" | "normal" | "big",
  size?: "small" | "normal" | "big",
  theme?: "primary" | "secondary" | "icon",
  clickHandler?: () => void;
  noAnimation?: boolean;
  children?: React.ReactNode;
  style?: String;
};

export type DropdownButtonProp = {
  padding?: "none" | "small" | "normal" | "big",
  size?: "small" | "normal" | "big",
  theme?: "primary" | "secondary",
  clickHandler?: () => void;
  noAnimation?: boolean;
  children?: React.ReactNode;
  style?: String;
};

export type IconButtonProp = {
  size?: "small" | "normal" | "big",
  clickHandler?: () => void;
  noAnimation?: boolean;
  children?: React.ReactNode;
  style?: String;
};

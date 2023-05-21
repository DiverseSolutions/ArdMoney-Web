export type NormalButtonProp = {
  clickHandler?: () => void;
  noAnimation?: boolean;
  children?: React.ReactNode;
  style?: String;
};

export type ConnectWalletButtonProp = {
  clickHandler?: () => void;
  noAnimation?: boolean;
  children?: React.ReactNode;
  style?: String;
};

export type DefaultButtonProp = {
  clickHandler?: () => void;
  noAnimation?: boolean;
  children?: React.ReactNode;
  style?: String;
};

export type DefaultOutlineButtonProp = {
  disabled?: boolean;
  clickHandler?: () => void;
  children?: React.ReactNode;
  style?: String;
  parentStyle?: String;
};

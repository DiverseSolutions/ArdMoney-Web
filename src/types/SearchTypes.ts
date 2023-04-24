export type DefaultSearchProp = {
  input: string,
  inputChangeHandler: (input:string) => void,
  disabled?: boolean,
  clickHandler?: () => void,
  children?: React.ReactNode,
  style?: String,
  parentStyle?: String,
};

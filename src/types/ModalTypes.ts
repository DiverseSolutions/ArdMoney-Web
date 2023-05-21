import { Token } from "@constants/TokenList";

export type TokenSelectModalProp = {
  tokenList: Array<Token>;
  isOpen: boolean;
  handleClose: () => void;
  setToken: (token: Token) => void;
};

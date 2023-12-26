import { createContext } from "react";

type ContextType = {
  resetState: boolean;
  reset: Function;
};

export default createContext<ContextType>({
  resetState: false,
  reset: () => {},
});

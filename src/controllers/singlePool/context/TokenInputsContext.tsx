import { createContext } from "react";

type ContextType = {
  fromInput: number | string;
  toInput: number | string;
};

export default createContext<ContextType>({ fromInput: 0, toInput: 0 });

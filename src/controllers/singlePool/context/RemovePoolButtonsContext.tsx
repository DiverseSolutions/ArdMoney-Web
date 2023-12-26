import { createContext } from "react";

type ContextType = boolean | null;

export default createContext<ContextType>(false);

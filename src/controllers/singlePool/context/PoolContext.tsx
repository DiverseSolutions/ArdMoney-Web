import { createContext } from "react";

type ContextType = any | null;

export default createContext<ContextType>(null);

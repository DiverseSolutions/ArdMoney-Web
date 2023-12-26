import { createContext } from "react";

type ContextType = number | "";

export default createContext<ContextType>("");

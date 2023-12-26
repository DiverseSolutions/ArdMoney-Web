import { createContext } from "react";

export default createContext<{
  baseToken: any;
  quoteToken: any;
}>({
  baseToken: null,
  quoteToken: null,
});

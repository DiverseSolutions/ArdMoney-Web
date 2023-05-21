import {
  BrowserProvider,
  JsonRpcProvider,
  JsonRpcSigner,
  Wallet,
} from "ethers";
import { createContext } from "react";

export type ProviderContextType = {
  provider: BrowserProvider | JsonRpcProvider | undefined;
  signer: JsonRpcSigner | Wallet | undefined;
};

export const ProviderContext = createContext({
  provider: undefined,
  signer: undefined,
} as ProviderContextType | undefined);

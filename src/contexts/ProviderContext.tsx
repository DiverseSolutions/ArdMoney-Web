import { BrowserProvider,JsonRpcSigner } from 'ethers';
import { createContext } from 'react';

export type ProviderContextType = {
  provider : BrowserProvider | undefined,
  signer : JsonRpcSigner | undefined,
}

export const ProviderContext = createContext({
  provider : undefined,
  signer : undefined,
} as ProviderContextType | undefined);

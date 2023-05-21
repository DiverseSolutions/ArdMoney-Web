export interface window {
  ethereum: any;
  metamaskWallet?: any;
}

declare global {
  interface Window {
    ethereum?: any;
    metamaskWallet?: any;
  }
}

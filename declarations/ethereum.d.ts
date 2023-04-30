export interface window {
  ethereum: any;
}

declare global {
  interface Window{
    ethereum?: any;
  }
}

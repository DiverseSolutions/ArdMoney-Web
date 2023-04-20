export function hexToInt(hex: string){
  return parseInt(hex, 16)
}

export function intToHex(chainId: number){
  return "0x" + chainId.toString(16);
}

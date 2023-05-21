import detectEthereumProvider from "@metamask/detect-provider";

export function hexToInt(hex: string) {
  return parseInt(hex, 16);
}

export function intToHex(chainId: number) {
  return "0x" + chainId.toString(16);
}

export async function setChainListener(listenerHandler: () => void) {
  try {
    const provider: any = await detectEthereumProvider({ timeout: 500 });
    if (provider) {
      provider.on("chainChanged", listenerHandler);
    }
  } catch (e) {
    console.log("Failed to add listener");
  }
}

export async function removeChainListener(listenerHandler: () => void) {
  try {
    const provider: any = await detectEthereumProvider({ timeout: 500 });
    if (provider) {
      provider.removeListener("chainChanged", listenerHandler);
    }
  } catch (e) {
    console.log("Failed to remove listener");
  }
}

import { AbstractSigner, ethers, Signer, Wallet } from "ethers";

import { Eip1193Bridge } from "@ethersproject/experimental";
// import CryptoJS from "crypto-js";

// export async function encryptArdMoneyWebWallet(
//   wallet: Wallet,
//   password: string,
// ) {
//   const secret = process.env.NEXT_PUBLIC_SECRET ?? "";
//   if (secret == "") throw "Secret Empty";
//
//   const jsonWallet = await wallet.encrypt(password, { scrypt: { N: 1 << 10 } });
//   const encryptedWithSecretWallet = CryptoJS.AES.encrypt(
//     JSON.stringify(jsonWallet),
//     secret,
//   );
//
//   return encryptedWithSecretWallet;
// }

// export async function decryptArdMoneyWebWallet(
//   encryptedWallet: string,
//   password: string,
// ) {
//   const secret = process.env.NEXT_PUBLIC_SECRET ?? "";
//   if (secret == "") throw "Secret Empty";
//
//   const bytes = CryptoJS.AES.decrypt(encryptedWallet, secret);
//   const walletString = bytes.toString(CryptoJS.enc.Utf8);
//   const walletJson = JSON.parse(walletString);
//   const wallet = await ethers.Wallet.fromEncryptedJson(walletJson, password);
//
//   return wallet;
// }

// export async function injectArdMoneyWebWallet(wallet: Wallet, rpc: string) {
//   const provider = new ethers.providers.JsonRpcProvider(rpc);
//   wallet = wallet.connect(provider);
//
//   const accountWallet = new ethers.Wallet(wallet.privateKey, provider);
//   const ardMoneyObject = new Eip1193Bridge(accountWallet, provider);
//
//   window.ardMoneyWallet = ardMoneyObject;
// }

export async function injectQuickDemo() {}

export {};

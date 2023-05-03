import { ethers } from "ethers";

export function parse(amount:bigint, decimal:number) {
  return ethers.parseUnits(amount.toString(), decimal)
}

export function format(amount : bigint, decimal : number) {
  return ethers.formatUnits(amount.toString(), decimal)
}

export function parse18(amount: bigint) {
  return ethers.parseUnits(amount.toString(), 18)
}

export function format18(amount : bigint) {
  return ethers.formatUnits(amount.toString(), 18)
}

export function formatAndParse18(amount : bigint) {
  return parseFloat(ethers.formatUnits(amount.toString(), 18))
}

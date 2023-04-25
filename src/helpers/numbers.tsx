import { isEmpty, isString } from "radash";

export function formatNumber(value : number | string) : string {
  if(isEmpty(value)) return "0.000"
  if(isString(value)) return toNumberFormat(parseFloat(value))

  return toNumberFormat(value)
}

function toNumberFormat(value:number){
  return new Intl.NumberFormat('en',{minimumFractionDigits:3}).format(value)
}

import { isEmpty, isString } from "radash";

export function formatNumber(
  value: number | string,
  decimals = 3,
  returnValue: number | string = ""
): string {
  if (isEmpty(value)) return returnValue.toString();
  if (isString(value)) return toNumberFormat(parseFloat(value), decimals);

  return toNumberFormat(value, decimals);
}

function toNumberFormat(value: number, decimals: number) {
  return new Intl.NumberFormat("en", {
    minimumFractionDigits: decimals,
  }).format(value);
}

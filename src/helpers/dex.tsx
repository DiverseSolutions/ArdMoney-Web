export function findByAddress(subgraphToken: string, token: string) {
  if (subgraphToken.toUpperCase() === token.toUpperCase()) return true;

  return false;
}

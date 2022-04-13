/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(1)
 * @return {*}
 * @param {number} accounts
 */
export function maximumWealth(accounts: number[][]): number {
  let max = 0
  for (const account of accounts) {
    const cur = account.reduce((a, b) => a + b, 0)
    max = Math.max(cur, max)
  }
  return max
}

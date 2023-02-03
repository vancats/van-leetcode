/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} coins
 */
export function getMaximumConsecutive(coins: number[]): number {
  coins = coins.sort((a, b) => a - b)
  let res = 1
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > res) break
    res += coins[i]
  }
  return res
}

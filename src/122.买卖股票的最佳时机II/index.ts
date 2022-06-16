/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} prices
 */
export function maxProfit(prices: number[]): number {
  let ans = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1])
      ans += (prices[i] - prices[i - 1])
  }
  return ans
}

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} prices
 */
export function maxProfit(prices: number[]): number {
  const n = prices.length
  // 0：有股票 1：没有股票且当场卖出；2：没有股票，不是单场卖出
  const dp: number[][] = new Array(n + 1).fill(0).map(() => new Array(3).fill(0))
  dp[0][0] = -Infinity
  dp[0][1] = -Infinity
  dp[0][2] = 0
  for (let i = 1; i <= n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i - 1])
    dp[i][1] = Math.max(dp[i - 1][0] + prices[i - 1])
    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2])
  }
  return Math.max(...dp[n])
}

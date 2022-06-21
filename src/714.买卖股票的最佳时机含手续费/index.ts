/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} prices
 * @param {number} fee
 */
export function maxProfit(prices: number[], fee: number): number {
  const n = prices.length
  // dp 的含义是：第 ind 天是否持有股票分别的最大利润
  // const dp: number[][] = [[0, -prices[0]], [0, 0]]
  let [cell, buy] = [0, -prices[0]]
  for (let i = 1; i < n; i++) {
    // 滚动数组优化
    // const ind = i % 2
    // const pre = (i - 1) % 2
    // dp[ind][0] = Math.max(dp[pre][0], dp[pre][1] + prices[i] - fee)
    // dp[ind][1] = Math.max(dp[pre][1], dp[pre][0] - prices[i])
    [cell, buy] = [Math.max(cell, buy + prices[i] - fee), Math.max(buy, cell - prices[i])]
  }
  // return dp[(n - 1) % 2][0]
  return cell
}

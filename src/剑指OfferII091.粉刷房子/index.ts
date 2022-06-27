/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} costs
 */
export function minCost(costs: number[][]): number {
  let dp: number[] = [0, 0, 0]
  for (let i = 1; i <= costs.length; i++) {
    const newDp: number[] = []
    newDp[0] = Math.min(dp[1], dp[2]) + costs[i - 1][0]
    newDp[1] = Math.min(dp[0], dp[2]) + costs[i - 1][1]
    newDp[2] = Math.min(dp[0], dp[1]) + costs[i - 1][2]
    dp = newDp
  }
  return Math.min(...dp)
}

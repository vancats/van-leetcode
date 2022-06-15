/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} cost
 */
export function minCostClimbingStairs(cost: number[]): number {
  cost.push(0)
  const dp: number[] = new Array(cost.length + 1).fill(0)
  dp[1] = cost[0]
  for (let i = 1; i <= cost.length; i++)
    dp[i + 1] = Math.min(dp[i], dp[i - 1]) + cost[i]

  return dp[cost.length]
}

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} cost
 */
export function minCostClimbingStairs2(cost: number[]): number {
  cost.push(0)
  const dp: number[] = [cost[0], 0]
  for (let i = 1; i < cost.length; i++) {
    const ind = i % 2
    dp[ind] = Math.min(dp[0], dp[1]) + cost[i]
  }
  return dp[(cost.length + 1) % 2]
}

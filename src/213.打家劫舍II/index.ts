/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 */
export function rob(nums: number[]): number {
  const n = nums.length
  if (n === 1) return nums[0]
  // dp 的含义是在第几间房子偷或不偷
  const dp: number[][] = new Array(n).fill(0).map(() => [0, 0])
  dp[0][0] = 0
  dp[0][1] = nums[0]
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
    dp[i][1] = dp[i - 1][0] + nums[i]
  }
  // res1 是不偷最后一家的情况
  const res1 = dp[n - 1][0]
  dp[0][1] = 0
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
    dp[i][1] = dp[i - 1][0] + nums[i]
  }
  // 如果第一家不偷的话，也可以获得两个值
  return Math.max(res1, dp[n - 1][0], dp[n - 1][1])
}

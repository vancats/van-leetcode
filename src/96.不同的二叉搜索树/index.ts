/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N)
 * @return {*}
 * @param {number} n
 */
export function numTrees(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0)
  dp[0] = dp[1] = 1
  /// i 是当前数量
  for (let i = 2; i <= n; i++) {
    /// j 是当前左子树数量
    for (let j = 0; j < i; j++)
      dp[i] += dp[j] * dp[i - j - 1]
  }
  return dp[n]
}

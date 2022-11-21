/**
 * @description: 动态规划 时间复杂度 O(C^2) 空间复杂度 O(C^2)
 * @return {*}
 * @param {number} n
 */
export function soupServings(n: number): number {
  n = Math.ceil(n / 25)
  if (n > 179) return 1
  const dp: number[][] = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0))
  dp[0][0] = 0.5
  for (let i = 1; i <= n; i++) dp[0][i] = 1
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = (
        dp[Math.max(0, i - 4)][j]
        + dp[Math.max(0, i - 3)][Math.max(0, j - 1)]
        + dp[Math.max(0, i - 2)][Math.max(0, j - 2)]
        + dp[Math.max(0, i - 1)][Math.max(0, j - 3)]
      ) / 4
    }
  }
  return dp[n][n]
}

/**
 * @description: 记忆化搜索 时间复杂度 O(C^2) 空间复杂度 O(C^2)
 * @return {*}
 * @param {number} n
 */
export function soupServings1(n: number): number {
  n = Math.ceil(n / 25)
  if (n > 179) return 1
  const memo: number[][] = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0))
  return dfs(n, n)
  function dfs(n: number, m: number): number {
    if (n <= 0 && m <= 0) return 0.5
    if (n <= 0) return 1
    if (m <= 0) return 0
    if (!memo[n][m])
      memo[n][m] = (dfs(n - 4, m) + dfs(n - 3, m - 1) + dfs(n - 2, m - 2) + dfs(n - 1, m - 3)) / 4
    return memo[n][m]
  }
}

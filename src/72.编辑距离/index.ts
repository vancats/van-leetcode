/**
 * @description: 时间复杂度 O(MN) 空间复杂度 O(MN)
 * @return {*}
 * @param {string} word1
 * @param {string} word2
 */
export function minDistance(word1: string, word2: string): number {
  const n1 = word1.length; const n2 = word2.length
  if (!word1) return n2
  if (!word2) return n1
  const dp = new Array(n1 + 1).fill(0).map(() => new Array(n2 + 1).fill(0))
  for (let i = 0; i <= n1; i++) dp[i][0] = i
  for (let i = 0; i <= n2; i++) dp[0][i] = i

  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++)
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + Number(word1[i - 1] !== word2[j - 1]))
  }
  return dp[n1][n2]
}

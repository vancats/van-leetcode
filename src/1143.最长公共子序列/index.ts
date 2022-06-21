/**
 * @description: 时间复杂度 O(MN) 空间复杂度 O(MN)
 * @return {*}
 * @param {string} text1
 * @param {string} text2
 */
export function longestCommonSubsequence(text1: string, text2: string): number {
  const n1 = text1.length
  const n2 = text2.length
  // dp 含义解释： i j 分别代表 text1 text 以第几个字符为末尾 dp[i][j] 是以 text1 的第 i 个与 text2 的第 j 个结尾的最长序列长度
  const dp: number[][] = new Array(n1 + 1).fill(0).map(() => new Array(n2 + 1).fill(0))
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      // 如果该位相等，则取当前值与 i-1 j-1 值加一的大值
      if (text1[i - 1] === text2[j - 1])
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1)
      else
        // 如果不相等，则取前值
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
    }
  }
  return dp[n1][n2]
}

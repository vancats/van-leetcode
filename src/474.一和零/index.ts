/**
 * @description: 空间复杂度 O(mn) 时间复杂度 O(lmn + L) l: strs长度 L strs数组所有字符串的长度和
 * @return {*}
 * @param {string} strs
 * @param {number} m
 * @param {number} n
 */
export function findMaxForm(strs: string[], m: number, n: number): number {
  const len = strs.length
  const dp: number[][][] = new Array(len + 1).fill(0).map(() => new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)))
  for (let i = 1; i <= len; i++) {
    let zero = 0
    let one = 0
    for (let s = 0; s < strs[i - 1].length; s++) strs[i - 1][s] === '0' ? zero++ : one++
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        dp[i][j][k] = dp[i - 1][j][k]
        if (j >= zero && k >= one)
          dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - zero][k - one] + 1)
      }
    }
  }
  return dp[len][m][n]
}

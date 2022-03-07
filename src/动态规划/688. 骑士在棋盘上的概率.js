/*
 * @Author: Lqf
 * @Date: 2022-02-17 10:22:30
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-07 16:06:27
 * @Description: 我添加了修改
 */

/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
const dirs = [[-1, 2], [1, 2], [-2, 1], [2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]]
var knightProbability = function (n, k, row, column) {
  const dp = new Array(k + 1).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(0)))
  // 把所有可能提前计算完毕
  for (let step = 0; step <= k; step++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (step === 0) {
          dp[step][i][j] = 1
        } else {
          for (const dir of dirs) {
            let ni = i + dir[0], nj = j + dir[1]
            if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
              dp[step][i][j] += dp[step - 1][ni][nj] / 8
            }
          }
        }
      }
    }
  }
  return dp[k][row][column]
}

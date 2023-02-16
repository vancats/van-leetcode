/**
 * @description: 时间复杂度 O(M * N * Min(M,N)) 空间复杂度 O(MN)
 * @return {*}
 * @param {number} grid
 */
export function largest1BorderedSquare(grid: number[][]): number {
  const n = grid.length
  const m = grid[0].length
  const row: number[][] = new Array(n).fill(0).map(() => new Array(m + 1).fill(0))
  const col: number[][] = new Array(m).fill(0).map(() => new Array(n + 1).fill(0))

  // 计算前缀和
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      row[i][j + 1] = row[i][j] + grid[i][j]
      col[j][i + 1] = col[j][i] + grid[i][j]
    }
  }

  // 从M N大值开始往下遍历
  for (let d = Math.min(m, n); d > 0; d--) {
    for (let i = 0; i <= n - d; i++) {
      for (let j = 0; j <= m - d; j++) {
        if (
          row[i][j + d] - row[i][j] === d
          && col[j][i + d] - col[j][i] === d
          && row[i + d - 1][j + d] - row[i + d - 1][j] === d
          && col[j + d - 1][i + d] - col[j + d - 1][i] === d
        )
          return d * d
      }
    }
  }
  return 0
}

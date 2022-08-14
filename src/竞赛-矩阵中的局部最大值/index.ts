/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N^2)
 * @return {*}
 * @param {number} grid
 */
export function largestLocal(grid: number[][]): number[][] {
  const n = grid.length
  const m = grid[0].length
  const res: number[][] = new Array(n - 2).fill(0).map(() => new Array(m - 2))
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 2; j++) {
      let max = grid[i][j]
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++)
          max = Math.max(grid[x][y], max)
      }
      res[i][j] = max
    }
  }
  return res
}

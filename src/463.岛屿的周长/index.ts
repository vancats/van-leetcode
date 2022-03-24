/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(1)
 * @return {*}
 * @param {number} grid
 */
export function islandPerimeter(grid: number[][]): number {
  let ans = 0, row = grid.length, col = grid[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j]) {
        ans += 4
        if (grid[i][j - 1]) ans -= 2
        if (grid[i - 1] && grid[i - 1][j]) ans -= 2
      }
    }
  }
  return ans
}
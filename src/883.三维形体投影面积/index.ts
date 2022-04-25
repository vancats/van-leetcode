/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(1)
 * @return {*}
 * @param {number} grid
 */
export function projectionArea(grid: number[][]): number {
  let xyArea = 0
  let yzArea = 0
  let xzArea = 0
  const n = grid.length
  for (let i = 0; i < n; i++) {
    let yzHeight = 0
    let xzHeight = 0
    for (let j = 0; j < n; j++) {
      xyArea += (grid[i][j] > 0 ? 1 : 0)
      yzHeight = Math.max(yzHeight, grid[i][j])
      xzHeight = Math.max(xzHeight, grid[j][i])
    }
    yzArea += yzHeight
    xzArea += xzHeight
  }
  return xzArea + xyArea + yzArea
}

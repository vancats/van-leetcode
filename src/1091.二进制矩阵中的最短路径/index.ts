/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} grid
 */
export function shortestPathBinaryMatrix(grid: number[][]): number {
  const n = grid.length
  if (grid[0][0] || grid[n - 1][n - 1]) return -1

  // 存放结果一维数组
  const arr: number[] = new Array(n * n).fill(-1)
  // 初始化
  arr[0] = 1
  // 存放当前坐标的行列下标
  const queue: number[][] = [[0, 0]]
  // 方向数组
  const dirs = [[-1, -1], [-1, 1], [-1, 0], [1, -1], [1, 0], [1, 1], [0, 1], [0, -1]]
  // BFS
  while (queue.length) {
    const cur = queue.shift()!
    for (let i = 0; i < 8; i++) {
      // 获取下一个的行列值
      const row = cur[0] + dirs[i][0]
      const col = cur[1] + dirs[i][1]
      // 计算得对应一维下标
      const ind = row * n + col
      // 判断跳过条件
      if (row < 0 || row >= n) continue
      if (col < 0 || col >= n) continue
      if (arr[ind] !== -1) continue
      if (grid[row][col]) continue
      // 优化
      if (ind === n * n - 1) return arr[cur[0] * n + cur[1]] + 1
      // 修改结果值
      arr[ind] = arr[cur[0] * n + cur[1]] + 1
      // 继续 dfs
      queue.push([row, col])
    }
  }
  return arr[arr.length - 1]
}

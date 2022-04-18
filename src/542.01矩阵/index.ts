/**
 * @description: 时间复杂度 O(MN) 空间复杂度 O(MN)
 * @return {*}
 * @param {number} mat
 */
export function updateMatrix(mat: number[][]): number[][] {
  const n = mat.length
  const m = mat[0].length
  // 初始化结果数组
  const arr = new Array(n).fill(0).map(() => new Array(m).fill(-1))
  const queue: number[][] = []
  // 方向数组
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
  // 初始化为 0 的情况
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 0) {
        arr[i][j] = 0
        // 初始化队列
        queue.push([i, j])
      }
    }
  }

  while (queue.length) {
    const [i, j] = queue.shift()!
    const curDis = arr[i][j]
    // bfs
    for (let k = 0; k < 4; k++) {
      const row = i + dirs[k][0]
      const col = j + dirs[k][1]
      // 超出边界
      if (row < 0 || row >= n) continue
      if (col < 0 || col >= m) continue
      // 已被标记
      if (arr[row][col] !== -1) continue
      arr[row][col] = curDis + 1
      queue.push([row, col])
    }
  }

  return arr
}

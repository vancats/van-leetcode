/**
 * @description: 时间复杂度 O(MN) 空间复杂度 O(MN)
 * @return {*}
 * @param {number} m
 * @param {number} n
 * @param {number} k
 */
export function movingCount(m: number, n: number, k: number): number {
  let res = 1
  // 初始化
  const arr: number[] = new Array(n * m).fill(-1)
  arr[0] = 1
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  // 将起点推入
  const queue: number[][] = [[0, 0]]
  while (queue.length) {
    const cur = queue.shift()!
    for (let i = 0; i < 4; i++) {
      const row = cur[0] + dirs[i][0]
      const col = cur[1] + dirs[i][1]
      if (row < 0 || row >= m) continue
      if (col < 0 || col >= n) continue
      if (arr[row * n + col] !== -1) continue
      if (getNum(row, col) > k) continue
      arr[row * n + col] = 1
      queue.push([row, col])
      res++
    }
  }
  return res
}

function getNum(row: number, col: number) {
  let sum = 0
  while (row) {
    sum += row % 10
    row = Math.floor(row / 10)
  }
  while (col) {
    sum += col % 10
    col = Math.floor(col / 10)
  }
  return sum
}

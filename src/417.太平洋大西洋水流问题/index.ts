/**
 * @description: 时间复杂度 O(MN) 空间复杂度 O(MN)
 * @return {*}
 * @param {number} heights
 */
export function pacificAtlantic(heights: number[][]): number[][] {
  const m = heights.length
  const n = heights[0].length
  const res: number[][] = []
  // 可以到达太平洋的点
  const left: number[] = new Array(m * n).fill(0)
  // 可以到达大西洋的点
  const right: number[] = new Array(m * n).fill(0)
  // 方向数组
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

  // dfs 上下两边
  for (let i = 0; i < m; i++) {
    dfs([i, 0], 0)
    dfs([i, n - 1], 1)
  }

  // dfs 左右两边
  for (let i = 0; i < n; i++) {
    dfs([0, i], 0)
    dfs([m - 1, i], 1)
  }

  // 如果左右都可以到达，push 入结果数组
  left.forEach((item, index) => {
    if (item && right[index])
      res.push(toArr(index))
  })

  return res

  function dfs(arr: number[], dir: number) {
    const temp = dir ? right : left
    const [x, y] = arr
    if (temp[toIndex(arr)])
      return

    temp[toIndex(arr)] = 1
    for (let i = 0; i < 4; i++) {
      const [dx, dy] = dirs[i]
      if (x + dx < 0 || x + dx >= m || y + dy < 0 || y + dy >= n)
        continue
      if (heights[x + dx][y + dy] >= heights[x][y])
        dfs([x + dx, y + dy], dir)
    }
  }

  // 二维转一维
  function toIndex(arr: number[]) {
    return arr[0] * n + arr[1]
  }

  // 一维转二维
  function toArr(ind: number): number[] {
    const x = Math.floor(ind / n)
    const y = ind % n
    return [x, y]
  }
}

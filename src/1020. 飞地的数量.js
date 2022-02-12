/*
 * @Author: Lqf
 * @Date: 2022-02-12 10:37:14
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-12 11:16:35
 * @Description: 我添加了修改
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  let row = grid.length, col = grid[0].length

  // 方向数组
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  // 深度优先搜索
  const dfs = (i, j) => {
    // 边界或海洋直接返回
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === 0) return
    // 遇到陆地就把它变成海洋
    grid[i][j] = 0
    for (const dir of dirs) {
      // 对四周进行深搜
      dfs(i + dir[0], j + dir[1])
    }
  }

  // 广度优先搜索
  const bfs = (i, j) => {
    let queue = [[i, j]]
    while (queue.length) {
      let [curI, curJ] = queue.shift()
      // 边界或海洋直接返回
      if (curI < 0 || curJ < 0 || curI >= row || curJ >= col || grid[curI][curJ] === 0) continue
      // 遇到陆地就把它变成海洋
      grid[curI][curJ] = 0
      for (const dir of dirs) {
        // 对四周进行深搜
        queue.push([curI + dir[0], curJ + dir[1]])
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if ((i === 0 || j === 0 || i === row - 1 || j === col - 1) && grid[i][j] === 1) {
        // 对边界上的陆地进行dfs，这些陆地都可以到达边界
        dfs(i, j)
        // bfs(i, j)
      }
    }
  }

  let count = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 剩下的陆地都是不能到达边界的
      if (grid[i][j] === 1) count++
    }
  }
  return count
}
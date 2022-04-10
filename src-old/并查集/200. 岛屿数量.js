/*
 * @Author: Lqf
 * @Date: 2022-03-07 14:49:29
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-07 15:43:37
 * @Description: 我添加了修改
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  const n = grid.length; const m = grid[0].length
  const fa = new Array(n * m); let ans = 0
  for (let i = 0; i < n * m; i++)
    fa[i] = i

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === '1') {
        if (j > 0 && grid[i][j - 1] === '1')
          fa[get(i * m + j)] = get(i * m + j - 1)
        if (i > 0 && grid[i - 1][j] === '1')
          fa[get(i * m + j)] = get((i - 1) * m + j)
      }
      else {
        fa[i * m + j] = -1
      }
    }
  }
  for (let i = 0; i < fa.length; i++) {
    if (fa[i] === i)
      ans++
  }
  return ans
  function get(x) {
    return fa[x] === x ? x : (fa[x] = get(fa[x]))
  }
}

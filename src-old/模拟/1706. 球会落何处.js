/*
 * @Author: Lqf
 * @Date: 2022-02-24 09:41:44
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 09:41:44
 * @Description: 我添加了修改
 */

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const findBall = function(grid) {
  const ans = []; const row = grid.length; const col = grid[0].length

  for (let i = 0; i < col; i++) {
    let pos = i
    for (let j = 0; j < row; j++) {
      const dir = grid[j][pos]
      if (pos < 0 || pos >= col || dir !== grid[j][pos + dir]) {
        pos = -1
        break
      }
      else {
        pos += dir
      }
    }
    ans.push(pos)
  }

  return ans
}

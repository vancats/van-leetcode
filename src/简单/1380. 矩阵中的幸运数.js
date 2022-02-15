/*
 * @Author: Lqf
 * @Date: 2022-02-15 09:28:24
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-15 09:28:59
 * @Description: 我添加了修改
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var luckyNumbers  = function(matrix) {
  let m = matrix[0].length, n = matrix.length
  let row = new Array(n).fill(Number.MAX_VALUE), col = new Array(m).fill(0), ret = []
  for(let i = 0; i < n; i++) {
      for(let j = 0; j < m; j++) {
          row[i] = Math.min(row[i], matrix[i][j])
          col[j] = Math.max(col[j], matrix[i][j])1
      }
  }
  for(let i = 0; i < n; i++) {
      for(let j = 0; j < m; j++) {
          if(matrix[i][j] === row[i] && matrix[i][j] === col[j]) {
              ret.push(matrix[i][j])
          }
      }
  }
  return ret
};
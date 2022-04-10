/*
 * @Author: Lqf
 * @Date: 2022-03-01 10:03:32
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-01 10:03:33
 * @Description: 我添加了修改
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
  if (numRows === 1)
    return s
  const arr = new Array(numRows).fill(0).map(() => [])
  let flag = 1; let ind = 0
  for (let i = 0; i < s.length; i++) {
    arr[ind].push(s[i])
    if (ind === numRows - 1)
      flag = -1
    if (ind === 0)
      flag = 1
    ind += flag
  }
  return arr.flat().join('')
}

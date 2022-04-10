/*
 * @Author: Lqf
 * @Date: 2022-02-24 10:33:17
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 10:33:20
 * @Description: 我添加了修改
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
  const ans = []
  for (let i = 0; i < numRows; i++) {
    const arr = new Array(i + 1).fill(1)
    for (let j = 1; j < arr.length - 1; j++)
      arr[j] = ans[i - 1][j - 1] + ans[i - 1][j]

    ans.push(arr)
  }
  return ans
}

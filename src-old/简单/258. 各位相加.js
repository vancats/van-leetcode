/*
 * @Author: Lqf
 * @Date: 2022-03-03 09:05:30
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-03 09:06:22
 * @Description: 我添加了修改
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let ans = [...(num + '')]
  while (ans.length > 1) {
    let sum = 0, cnt = ans.length
    for (let i = 0; i < cnt; i++) {
      sum += Number(ans.shift())
    }
    ans = [...(sum + '')]
  }
  return Number(ans[0])
}
/*
 * @Author: Lqf
 * @Date: 2022-02-24 16:17:35
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 16:17:37
 * @Description: 我添加了修改
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function(num1, num2) {
  const ans = []; let flag = 0
  num1 = [...num1], num2 = [...num2]
  while (num1.length || num2.length) {
    const n1 = num1.pop() || 0; const n2 = num2.pop() || 0
    const mod = (Number(n1) + Number(n2) + flag) % 10
    flag = Math.floor((Number(n1) + Number(n2) + flag) / 10)
    ans.unshift(mod)
  }
  if (flag)
    ans.unshift(1)
  return ans.join('')
}

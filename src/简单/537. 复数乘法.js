/*
 * @Author: Lqf
 * @Date: 2022-02-25 09:01:41
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-25 09:01:44
 * @Description: 我添加了修改
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
  let n1 = num1.split('+'), n2 = num2.split('+')
  let real = n1[0] * n2[0] + n1[1].slice(0, -1) * n2[1].slice(0, -1) * -1
  let ima = n1[1].slice(0, -1) * n2[0] + n2[1].slice(0, -1) * n1[0]
  return real + '+' + ima + 'i'
}
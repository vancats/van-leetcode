/*
 * @Author: Lqf
 * @Date: 2022-02-17 16:17:03
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-17 16:31:55
 * @Description: 我添加了修改
 */

/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = function(ops) {
  let res = 0; const stack = []
  ops.forEach((op) => {
    let cur, prev
    switch (op) {
      case '+':
        cur = stack[stack.length - 1], prev = stack[stack.length - 2]
        stack.push(cur + prev)
        res += cur + prev
        break
      case 'C':
        res -= stack.pop()
        break
      case 'D':
        cur = stack[stack.length - 1] * 2
        stack.push(cur)
        res += cur
        break
      default:
        op = Number(op)
        stack.push(op)
        res += op
        break
    }
  })
  return res
}

/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:09:18
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 10:54:36
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
  const valid1 = valid(p1, p2, p3, p4)
  const valid2 = valid(p2, p1, p3, p4)
  const valid3 = valid(p3, p2, p1, p4)
  const valid4 = valid(p4, p2, p3, p1)
  return valid1 && valid2 && valid3 && valid4
}

// 一点到其他三点的距离满足直角三角形规则
function valid (p1, p2, p3, p4) {
  let square2 = square(p1, p2)
  let square3 = square(p1, p3)
  let square4 = square(p1, p4)
  let arr = [square2, square3, square4].sort((a, b) => a - b)
  if (arr[0] === 0) return false
  return (arr[0] + arr[1] === arr[2]) && (arr[0] === arr[1])
}

// 两点距离的平方
function square (p1, p2) {
  return Math.pow((p2[0] - p1[0]), 2) + Math.pow((p2[1] - p1[1]), 2)
}
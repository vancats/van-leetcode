/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:17:40
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 10:39:29
 * @Description: 我添加了修改
 */

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i] = Math.min(rectangles[i][0], rectangles[i][1])
  }
  rectangles.sort((a, b) => b - a)
  return rectangles.lastIndexOf(rectangles[0]) + 1
}
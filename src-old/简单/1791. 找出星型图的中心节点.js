/*
 * @Author: Lqf
 * @Date: 2022-02-18 10:37:55
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-18 10:37:55
 * @Description: 我添加了修改
 */

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  return edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1] ? edges[0][0] : edges[0][1]
}
/*
 * @Author: Lqf
 * @Date: 2022-03-07 16:35:17
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-07 16:37:03
 * @Description: 统计出有多少个集合，集合间连接数等于集合数减一
 */

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  if (n > connections.length + 1) return -1
  let fa = new Array(n), ans = 0
  for (let i = 0; i < n; i++) {
    fa[i] = i
  }
  for (let i = 0; i < connections.length; i++) {
    fa[get(connections[i][0])] = get(connections[i][1])
  }
  for (let i = 0; i < n; i++) {
    if (i === fa[i]) ans++
  }
  return ans - 1
  function get(x) {
    return fa[x] === x ? x : (fa[x] = get(fa[x]))
  }
}
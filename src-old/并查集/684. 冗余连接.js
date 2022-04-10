/*
 * @Author: Lqf
 * @Date: 2022-03-07 16:24:14
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-07 16:24:17
 * @Description: 我添加了修改
 */

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantConnection = function(edges) {
  const fa = new Array(edges.length + 1); let ans = []
  for (let i = 1; i <= edges.length; i++)
    fa[i] = i

  for (let i = 0; i < edges.length; i++) {
    if (get(edges[i][0]) === get(edges[i][1])) {
      ans = edges[i]
      continue
    }
    fa[get(edges[i][0])] = get(edges[i][1])
  }
  return ans
  function get(x) {
    return fa[x] === x ? x : (fa[x] = get(fa[x]))
  }
}

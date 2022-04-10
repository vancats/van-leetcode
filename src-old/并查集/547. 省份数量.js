/*
 * @Author: Lqf
 * @Date: 2022-03-07 14:48:18
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-07 14:48:19
 * @Description: 我添加了修改
 */

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function(isConnected) {
  const fa = new Array(isConnected.length); let ans = 0
  for (let i = 0; i < isConnected.length; i++)
    fa[i] = i

  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected.length; j++) {
      if (isConnected[i][j])
        fa[get(i)] = get(j)
    }
  }
  for (let i = 0; i < isConnected.length; i++) {
    if (i === get(i))
      ans++
  }
  return ans
  function get(x) {
    return fa[x] = (fa[x] === x ? x : get(fa[x]))
  }
}

/*
 * @Author: Lqf
 * @Date: 2022-03-07 15:59:52
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-07 15:59:56
 * @Description: 我添加了修改
 */

/**
 * @param {string[]} equations
 * @return {boolean}
 */
const equationsPossible = function(equations) {
  const fa = new Array(26)
  for (let i = 0; i < 26; i++)
    fa[i] = i

  for (let i = 0; i < equations.length; i++) {
    if (equations[i][1] === '!')
      continue
    fa[get(equations[i][0].charCodeAt() - 97)] = get(equations[i][3].charCodeAt() - 97)
  }
  for (let i = 0; i < equations.length; i++) {
    if (equations[i][1] === '=')
      continue
    if (fa[get(equations[i][0].charCodeAt() - 97)] === fa[get(equations[i][3].charCodeAt() - 97)])
      return false
  }
  return true
  function get(x) {
    return fa[x] === x ? x : (fa[x] = get(fa[x]))
  }
}

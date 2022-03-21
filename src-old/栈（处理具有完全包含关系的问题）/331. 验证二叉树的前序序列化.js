/*
 * @Author: Lqf
 * @Date: 2022-02-17 19:41:54
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-17 19:41:56
 * @Description: 我添加了修改
 */

/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  let ans = []
  preorder = preorder.split(',')
  for (let i = 0; i < preorder.length; i++) {
    ans.push(preorder[i])
    while (ans.length > 2 && ans[ans.length - 1] === '#' && ans[ans.length - 2] === '#' && ans[ans.length - 3] !== '#') {
      ans[ans.length - 3] = '#'
      ans.length -= 2
    }
  }
  return ans.length === 1 && ans[0] === '#'
}

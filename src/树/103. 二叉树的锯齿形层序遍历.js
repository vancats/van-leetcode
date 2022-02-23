/*
 * @Author: Lqf
 * @Date: 2022-02-23 16:36:35
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-23 16:42:00
 * @Description: 我添加了修改
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return []
  let queue = [root], ans = []
  while (queue.length) {
    let ind = queue.length, tmp = []
    for (let i = 0; i < ind; i++) {
      let node = queue.shift()
      tmp.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    ans.push(tmp)
  }
  for (let i = 1; i < ans.length; i += 2) {
    ans[i].reverse()
  }
  return ans
}
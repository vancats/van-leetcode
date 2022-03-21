/*
 * @Author: Lqf
 * @Date: 2022-02-23 16:23:00
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-28 14:46:58
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
 * @return {number[]}
 */
var preorderTraversal = function (root, ans = []) {
  if (!root) return ans
  ans.push(root.val)
  preorderTraversal(root.left, ans)
  preorderTraversal(root.right, ans)
  return ans
}


var preorderTraversal = function (root) {
  if (!root) return []
  let queue = [root], ans = []
  while (queue.length) {
    let cnt = queue.length
    for (let i = 0; i < cnt; i++) {
      let root = queue.shift()
      ans.push(root.val)
      root.right && queue.unshift(root.right)
      root.left && queue.unshift(root.left)
    }
  }
  return ans
}
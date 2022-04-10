/*
 * @Author: Lqf
 * @Date: 2022-02-23 16:36:24
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-23 16:40:25
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
const levelOrderBottom = function(root) {
  if (!root)
    return []
  const queue = [root]; const ans = []
  while (queue.length) {
    const ind = queue.length; const tmp = []
    for (let i = 0; i < ind; i++) {
      const node = queue.shift()
      tmp.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    ans.push(tmp)
  }
  return ans.reverse()
}

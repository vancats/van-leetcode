/*
 * @Author: Lqf
 * @Date: 2022-02-23 16:31:31
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-23 16:38:36
 * @Description: 我添加了修改
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
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
  return ans
}

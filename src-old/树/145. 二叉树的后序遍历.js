/*
 * @Author: Lqf
 * @Date: 2022-02-28 14:52:28
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-28 14:54:00
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

var postorderTraversal = function(root, ans = []) {
  if (!root)
    return ans
  postorderTraversal(root.left, ans)
  postorderTraversal(root.right, ans)
  ans.push(root.val)
  return ans
}

var postorderTraversal = function(root) {
  if (!root)
    return []
  const stack = [root]; const ans = []
  while (stack.length) {
    const cnt = stack.length
    for (let i = 0; i < cnt; i++) {
      const root = stack.pop()
      ans.unshift(root.val)
      root.left && stack.push(root.left)
      root.right && stack.push(root.right)
    }
  }
  return ans
}

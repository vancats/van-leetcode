/*
 * @Author: Lqf
 * @Date: 2022-02-17 18:58:50
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-17 19:20:38
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
  if (root.left)
    postorderTraversal(root.left, ans)
  if (root.right)
    postorderTraversal(root.right, ans)
  ans.push(root.val)
  return ans
}

var postorderTraversal = function(root) {
  const stack = [root]; const res = []
  while (stack.length) {
    const cur = stack.pop()
    res.unshift(cur.val)
    if (cur.right)
      stack.push(cur.right)
    if (cur.left)
      stack.push(cur.left)
  }
  return res
}

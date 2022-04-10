/*
 * @Author: Lqf
 * @Date: 2022-02-28 14:57:24
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-28 15:25:25
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
var inorderTraversal = function(root, ans = []) {
  if (!root)
    return ans
  inorderTraversal(root.left, ans)
  ans.push(root.val)
  inorderTraversal(root.right, ans)
  return ans
}

var inorderTraversal = function(root) {
  if (!root)
    return []
  const stack = [root]; const ans = []
  while (stack.length) {

  }
}

var inorderTraversal = function(root) {
  if (!root)
    return []
  const stack = []; const ans = []; let cur = root
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    ans.push(cur.val)
    cur = cur.right
  }
  return ans
}

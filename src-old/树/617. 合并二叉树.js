/*
 * @Author: Lqf
 * @Date: 2022-02-24 19:40:14
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 19:40:18
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1) return root2
  if (!root2) return root1
  root1.val = root1.val + root2.val
  root1.left = mergeTrees(root1.left, root2.left)
  root1.right = mergeTrees(root1.right, root2.right)
  return root1
}

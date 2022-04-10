/*
 * @Author: Lqf
 * @Date: 2022-02-23 16:57:11
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-23 17:01:47
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root)
    return false
  if (root.val === targetSum && !root.left && !root.right)
    return true
  if (hasPathSum(root.left, targetSum - root.val))
    return true
  if (hasPathSum(root.right, targetSum - root.val))
    return true
  return false
}

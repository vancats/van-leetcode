/*
 * @Author: Lqf
 * @Date: 2022-02-24 10:24:56
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 10:24:59
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
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root)
    return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

/*
 * @Author: Lqf
 * @Date: 2022-02-23 16:27:30
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-23 16:38:46
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;
  [root.left, root.right] = [root.right, root.left]
  invertTree(root.left)
  invertTree(root.right)
  return root
}
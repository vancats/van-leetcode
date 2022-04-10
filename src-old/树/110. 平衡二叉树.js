/*
 * @Author: Lqf
 * @Date: 2022-02-23 16:48:51
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-23 16:56:37
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
 * @return {boolean}
 */

function getHeight(root) {
  if (!root)
    return 0
  const left = getHeight(root.left)
  const right = getHeight(root.right)
  if (Math.abs(left - right) > 1)
    return -1
  if (left < 0 || right < 0)
    return -1
  return Math.max(left, right) + 1
}

const isBalanced = function(root) {
  return getHeight(root) >= 0
}

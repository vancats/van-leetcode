/*
 * @Author: Lqf
 * @Date: 2022-02-23 18:20:57
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-23 18:35:40
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

// 普通递归做法
// var countNodes = function(root) {
//     if (!root) return 0
//     return countNodes(root.left) + countNodes(root.right) + 1
// };

// 完全二叉树递归做法
var countNodes = function(root) {
  if (!root)
    return 0
  const left = level(root.left)
  const right = level(root.right)
  if (left === right)
    return countNodes(root.right) + (1 << left)
  else
    return countNodes(root.left) + (1 << right)
}

function level(root) {
  if (!root)
    return 0
  let level = 0
  while (root) {
    root = root.left
    level++
  }
  return level
}

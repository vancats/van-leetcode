/*
 * @Author: Lqf
 * @Date: 2021-11-11 16:28:30
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-23 18:18:29
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length)
    return null
  let i = 0
  for (; i < inorder.length; i++) {
    if (preorder[0] === inorder[i])
      break
  }

  let leftPre, rightPre, leftIn, rightIn
  leftPre = preorder.slice(1, i + 1)
  rightPre = preorder.slice(i + 1)
  leftIn = inorder.slice(0, i)
  rightIn = inorder.slice(i + 1)

  const node = new TreeNode(preorder[0])
  node.left = buildTree(leftPre, leftIn)
  node.right = buildTree(rightPre, rightIn)

  return node
}

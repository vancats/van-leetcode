/*
 * @Author: Lqf
 * @Date: 2022-02-23 18:41:49
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-23 18:56:50
 * @Description: 我添加了修改
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  if (!B || !A)
    return false
  if (isSame(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
    return true
  return false
}

function isSame(A, B) {
  if (!A && B)
    return false
  if (A.val !== B.val)
    return false
  if ((!B.left || isSame(A.left, B.left)) && (!B.right || isSame(A.right, B.right)))
    return true

  return false
}

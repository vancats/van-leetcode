/*
 * @Author: Lqf
 * @Date: 2022-02-23 18:36:53
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-23 18:40:07
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
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let cnt = countNodes(root.right)
  if (cnt + 1 === k) return root.val
  if (cnt + 1 < k) return kthLargest(root.left, k - cnt - 1)
  return kthLargest(root.right, k)
}

function countNodes (root) {
  if (!root) return 0
  return countNodes(root.left) + countNodes(root.right) + 1
}
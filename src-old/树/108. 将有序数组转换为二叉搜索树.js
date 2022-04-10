/*
 * @Author: Lqf
 * @Date: 2022-02-24 20:19:40
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-24 20:19:41
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums, left = 0, right = nums.length - 1) {
  if (left > right)
    return null
  const mid = (left + right) >> 1
  const root = new TreeNode(nums[mid])
  root.left = sortedArrayToBST(nums, left, mid - 1)
  root.right = sortedArrayToBST(nums, mid + 1, right)
  return root
}

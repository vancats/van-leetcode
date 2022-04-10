import { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(lgN)
 * @return {*}
 * @param {number} nums
 */
export function sortedArrayToBST(nums: number[], left = 0, right = nums.length - 1): TreeNode | null {
  if (left > right)
    return null
  // 永远把中间的树当作根节点
  const mid = (left + right) >> 1
  const root = new TreeNode(nums[mid])
  root.left = sortedArrayToBST(nums, left, mid - 1)
  root.right = sortedArrayToBST(nums, mid + 1, right)
  return root
}

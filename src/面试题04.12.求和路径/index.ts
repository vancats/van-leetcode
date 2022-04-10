import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N) 待定
 * @return {*}
 * @param {TreeNode} root
 * @param {number} sum
 */
export function pathSum(root: TreeNode | null, sum: number): number {
  if (!root)
    return 0
  const a = getPathSum(root, sum)
  return a + pathSum(root.right, sum) + pathSum(root.left, sum)
}
function getPathSum(root: TreeNode | null, sum: number): number {
  if (!root)
    return 0
  const val = sum - root.val
  return Number(root.val === sum) + getPathSum(root.left, val) + getPathSum(root.right, val)
}

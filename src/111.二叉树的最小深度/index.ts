import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(H)
 * @return {*}
 * @param {TreeNode} root
 */
export function minDepth(root: TreeNode | null): number {
  if (!root) return 0
  if (!root.left && !root.right) return 1
  if (!root.left) return 1 + minDepth(root.right)
  if (!root.right) return 1 + minDepth(root.left)
  return 1 + Math.min(minDepth(root.left), minDepth(root.right))
}

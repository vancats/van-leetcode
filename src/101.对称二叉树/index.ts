import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(lgN) 空间复杂度 O(lgN)
 * @return {*}
 * @param {TreeNode} root
 */
export function isSymmetric(root: TreeNode | null): boolean {
  return isTraverse(root!.left, root!.right)
}

function isTraverse(left: TreeNode | null, right: TreeNode | null): boolean {
  if (!left && !right) return true
  if (!left || !right) return false
  return left.val === right.val && isTraverse(left.left, right.right) && isTraverse(left.right, right.left)
}

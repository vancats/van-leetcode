import { TreeNode } from "../../utils/TreeNode"

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 * @param {number} k
 */
export function findTarget(root: TreeNode | null, k: number, set: Set<number> = new Set()): boolean {
  if (!root) return false
  if (set.has(root.val)) return true
  set.add(k - root.val)
  return findTarget(root.left, k, set) || findTarget(root.right, k, set)
}

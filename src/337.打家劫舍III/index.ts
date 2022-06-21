import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 */
export function rob(root: TreeNode | null): number {
  if (!root) return 0
  function getMoney(root: TreeNode | null): number[] {
    if (!root) return [0, 0]
    // 得到左右节点的数量
    const left = getMoney(root.left)
    const right = getMoney(root.right)
    // 不选当前节点的最大值
    const notSteal = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    // 选择当前节点的最大值
    const steal = root.val + left[0] + right[0]
    return [notSteal, steal]
  }
  return Math.max(...getMoney(root))
}

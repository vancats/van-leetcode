import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 */
export function deepestLeavesSum(root: TreeNode | null): number {
  if (!root)
    return 0
  const stack: TreeNode[] = [root]; let res = 0
  while (stack.length) {
    res = 0
    const len = stack.length
    for (let i = 0; i < len; i++) {
      const temp = stack.shift()!
      res += temp.val
      temp.left && stack.push(temp.left)
      temp.right && stack.push(temp.right)
    }
  }
  return res
}

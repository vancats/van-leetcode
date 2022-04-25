import type { TreeNode } from './../../utils/TreeNode'
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 */
export function findBottomLeftValue(root: TreeNode | null): number {
  const queue: TreeNode[] = [root!]
  let res = Infinity
  while (queue.length) {
    const len = queue.length
    res = queue[0].val
    for (let i = 0; i < len; i++) {
      const cur = queue.shift()!
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
  }
  return res
}

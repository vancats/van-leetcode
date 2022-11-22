import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度O(N) 空间复杂度O(N)
 * @return {*}
 * @param {TreeNode} root
 */
export function findFrequentTreeSum(root: TreeNode | null): number[] {
  if (!root) return []
  const map: Map<number, number> = new Map()
  getTotal(root)
  const arr: number[][] = [...map.entries()].sort((a, b) => b[1] - a[1])
  const res: number[] = []
  for (let i = 0; i < arr.length && arr[i][1] === arr[0][1]; i++) res.push(arr[i][0])
  return res

  function getTotal(root: TreeNode): number {
    const left = root.left ? getTotal(root.left) : 0
    const right = root.right ? getTotal(root.right) : 0
    const cur = root.val + left + right
    map.set(cur, (map.get(cur) || 0) + 1)
    return cur
  }
}

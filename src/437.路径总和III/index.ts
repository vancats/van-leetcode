import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 前缀和 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 * @param {number} targetSum
 */
export function pathSum(root: TreeNode | null, targetSum: number): number {
  const map: Map<number, number> = new Map()
  map.set(0, 1)
  return dfs(root, 0)

  function dfs(root: TreeNode | null, curSum: number): number {
    if (!root) return 0
    // 当前的前缀和
    curSum += root.val
    // 获取与当前前缀和相差 targetSum 的数量，这个就是以当前位置为结束点，前面的所有可能
    let ret = map.get(curSum - targetSum) || 0
    // 设置当前前缀和值的数量
    map.set(curSum, (map.get(curSum) || 0) + 1)
    // 递归查找子节点
    ret += dfs(root.left, curSum)
    ret += dfs(root.right, curSum)
    // 清除内容，保证回溯准确性
    map.set(curSum, map.get(curSum)! - 1)
    return ret
  }
}

/**
 * @description: DFS 时间复杂度 O(N^2) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 * @param {number} targetSum
 */
export function pathSum1(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0
  let res = dfs(root, targetSum)
  res += pathSum(root.left, targetSum)
  res += pathSum(root.right, targetSum)
  return res

  function dfs(root: TreeNode | null, restSum: number): number {
    if (!root) return 0
    let ret = 0
    if (root.val === restSum) ret++
    ret += dfs(root.left, restSum - root.val)
    ret += dfs(root.right, restSum - root.val)
    return ret
  }
}

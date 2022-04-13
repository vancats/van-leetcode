import { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 待定
 * @return {*}
 * @param {number} n
 */
export function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0)
    return []
  return dfs(1, n)
}

function dfs(left: number, right: number): Array<TreeNode | null> {
  if (left > right)
    return [null]
  const ans: Array<TreeNode | null> = []
  // 递归得出所有节点
  for (let i = left; i <= right; i++) {
    // 分别得出左右节点的值
    const leftTree = dfs(left, i - 1)
    const rightTree = dfs(i + 1, right)
    for (const l of leftTree) {
      for (const r of rightTree)
        ans.push(new TreeNode(i, l, r))
    }
  }
  return ans
}

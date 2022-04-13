
import type { TreeNode } from '../../utils/TreeNode'

export function distributeCoins(root: TreeNode | null): number {
  let ans = 0
  dfs(root)
  return ans

  // dfs 返回内容为该节点的硬币数和节点数的差值
  function dfs(root: TreeNode | null): number {
    if (!root) return 0
    // 左子节点差值
    const left = dfs(root.left)
    // 右子节点差值
    const right = dfs(root.right)
    // 左右子树移动次数
    ans += Math.abs(left) + Math.abs(right)
    // 左右子节点差值加当前节点需转移数目
    return root.val + left + right - 1
  }
}

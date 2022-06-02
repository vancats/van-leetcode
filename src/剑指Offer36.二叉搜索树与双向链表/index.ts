import type { TreeNode } from '../../utils/TreeNode'

export function treeToDoublyList(root: TreeNode | null): TreeNode | null {
  if (!root) return root
  let head: TreeNode | null = null
  let prev: TreeNode | null = null
  dfs(root)
  head!.left = prev
  prev!.right = head
  return head

  function dfs(root: TreeNode | null) {
    if (!root) return
    dfs(root.left)
    // 确定指向
    if (prev) prev.right = root
    // 初始化
    else head = root
    // 确定指向
    root.left = prev
    prev = root
    dfs(root.right)
  }
}

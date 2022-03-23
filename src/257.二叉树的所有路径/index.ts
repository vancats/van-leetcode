import { TreeNode } from "../../utils/TreeNode"

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 */
export function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = []
  const dfs = (root: any, stack: string = '') => {
    if (!root.left && !root.right) {
      stack += ('->' + root.val)
      result.push(stack.slice(2))
    } else {
      root.left && dfs(root.left, stack + '->' + root.val)
      root.right && dfs(root.right, stack + '->' + root.val)
    }
  }
  dfs(root)
  return result
}
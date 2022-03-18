import { TreeNode } from "../../utils/TreeNode"

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 */
export function isValidBST(root: TreeNode | null): boolean {
  function dfs(root: TreeNode | null, minValue: number, maxValue: number): boolean {
    if (!root) return true
    if (root.val <= minValue || root.val >= maxValue) return false
    return dfs(root.left, minValue, root.val) && dfs(root.right, root.val, maxValue)
  }
  return dfs(root, -Infinity, Infinity)
}
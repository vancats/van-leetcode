import { TreeNode } from "../../utils/TreeNode"

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {TreeNode} root
 * @param {number} val
 */
export function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return new TreeNode(val)
  if (root.val < val) root.right = insertIntoBST(root.right, val)
  else root.left = insertIntoBST(root.left, val)
  return root
}
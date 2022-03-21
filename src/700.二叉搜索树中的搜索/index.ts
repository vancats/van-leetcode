import { TreeNode } from "../../utils/TreeNode"

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)w
 * @return {*}
 * @param {TreeNode} root
 * @param {number} val
 */
export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root || root.val === val) return root
  if (root.val > val) return searchBST(root.left, val)
  else return searchBST(root.right, val)
}

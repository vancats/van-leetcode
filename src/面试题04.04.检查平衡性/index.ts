import { TreeNode } from "../../utils/TreeNode"

/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 */
export function isBalanced1(root: TreeNode | null): boolean {
  if (!root) return true
  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) return false
  return isBalanced1(root.left) && isBalanced1(root.right)
};

function getHeight(root: TreeNode | null): number {
  if (!root) return 0
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1
}

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 */
export function isBalanced2(root: TreeNode | null): boolean {
  return isHeight(root) >= 0
}

function isHeight(root: TreeNode | null): number {
  if (!root) return 0
  const leftHeight = isHeight(root.left)
  const rightHeight = isHeight(root.right)
  if (leftHeight < 0 || rightHeight < 0 || Math.abs(leftHeight - rightHeight) > 1) return -1
  return Math.max(leftHeight, rightHeight) + 1
}
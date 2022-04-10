import type { TreeNode } from '../../utils/TreeNode'
/**
 * @description 空间复杂度 O(1) 时间复杂度 O(N)
 * @param {TreeNode} root
 * @return {TreeNode}
 */
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root)
    return root;
  [root.left, root.right] = [root.right, root.left]
  invertTree(root.left)
  invertTree(root.right)
  return root
}

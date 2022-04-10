import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 * @param {*} str
 */
export function tree2str(root: TreeNode | null, str = ''): string {
  if (!root)
    return str
  str += root.val
  if (root.left || root.right)
    str += `(${tree2str(root.left)})`
  if (root.right)
    str += `(${tree2str(root.right)})`
  return str
}

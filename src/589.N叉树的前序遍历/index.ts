import type { TreeNode } from '../../utils/TreeNode'
/**
 * @description 时间复杂度 O(N) 空间复杂度 O(N)
 * @param {Node|null} root
 * @return {number[]}
 */
export const preorder = function(root: TreeNode | null | any, ans: number[] = []): number[] {
  if (!root)
    return ans
  ans.push(root.val)
  for (let i = 0; i < root.children.length; i++)
    preorder(root.children[i], ans)

  return ans
}

import { TreeNode } from '../../utils/treeNode'
/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root: TreeNode | null | any, ans: number[] = []): number[] {
  if (!root) return ans
  ans.push(root.val)
  for (let i = 0; i < root.children.length; i++) {
    preorder(root.children[i], ans)
  }
  return ans
}

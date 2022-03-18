
import { TreeNode } from "../../utils/treeNode"

/**
 * @description 时间复杂度 O(N) 空间复杂度 O(N)
 * @param {Node|null} root
 * @return {number[]}
 */
export function postorder(root: TreeNode | null | any, ans: number[] = []): number[] {
  if (!root) return ans
  for (let i = 0; i < root.children.length; i++) {
    postorder(root.children[i], ans)
  }
  ans.push(root.val)
  return ans
}
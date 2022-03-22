import { sameTree, TreeNode } from "../../utils/TreeNode"

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 */
export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  /**
   * 返回值定义：
   *  如果当前是 p 或 q，直接返回
   *  递归查询，如果左右子树分别有值，则该节点就是最近的祖先节点
   */
  if (!root) return null
  if (sameTree(root, p) || sameTree(root, q)) return root
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)
  if (left && right) return root
  if (left) return left
  return right
}

import { TreeNode } from "../../utils/TreeNode"
import { sortedArrayToBST } from "../108.将有序数组转换为二叉搜索树"

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(lgN)
 * @return {*}
 * @param {TreeNode} root
 */
export function balanceBST(root: TreeNode | null): TreeNode | null {
  const arr = middleSort(root)
  return sortedArrayToBST(arr)
}

function middleSort(root: TreeNode | null, res: number[] = []): number[] {
  if (!root) return res
  middleSort(root.left, res)
  res.push(root.val)
  middleSort(root.right, res)
  return res
}
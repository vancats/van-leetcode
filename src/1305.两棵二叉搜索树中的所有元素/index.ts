import { TreeNode } from "../../utils/TreeNode"

/**
 * @description: 时间复杂度 O(M + N) 空间复杂度 O(M + N)
 * @return {*}
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 */
export function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
  const arr1 = orderSort(root1)
  const arr2 = orderSort(root2)
  let i = 0, j = 0, k = 0, res: number[] = []
  while (i < arr1.length || j < arr2.length) {
    if ((j >= arr2.length) || (i < arr1.length && arr1[i] <= arr2[j])) {
      res[k++] = arr1[i++]
    } else {
      res[k++] = arr2[j++]
    }
  }
  return res
}

function orderSort(root: TreeNode | null, ans: number[] = []) {
  if (!root) return ans
  orderSort(root.left, ans)
  ans.push(root.val)
  orderSort(root.right, ans)
  return ans
}
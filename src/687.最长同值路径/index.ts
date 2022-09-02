import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 */
export function longestUnivaluePath(root: TreeNode | null): number {
  return getNum(root)[2] - 1
}

/**
 * @return {
 *  0: 以该节点往左走的路径最大值
 *  1: 以该节点往右走的路径最大值
 *  2: 该节点或该节点的子节点中的路径最大值
 * }
 * @param {TreeNode} root
 */
function getNum(root: TreeNode | null): number[] {
  if (!root) return [1, 1, 1]
  const left = getNum(root.left)
  const right = getNum(root.right)
  /// left 和 right 后续计算需使用; curMax 是最终值
  let leftNum = 1
  let rightNum = 1
  let curMax = 1
  if (root.left && root.val === root.left.val) {
    leftNum += Math.max(left[0], left[1])
    curMax += Math.max(left[0], left[1])
  }

  if (root.right && root.val === root.right.val) {
    rightNum += Math.max(right[0], right[1])
    curMax += Math.max(right[0], right[1])
  }

  curMax = Math.max(curMax, left[2], right[2])
  return [leftNum, rightNum, curMax]
}

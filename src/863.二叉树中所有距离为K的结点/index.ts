
import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 */
export function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
  // 代表距离目标节点的层级差
  let cnt = 0
  const ans: number[] = []
  getResult(root, target!.val, k, ans)
  return ans

  function getResult(root: TreeNode | null, target: number, k: number, ans: number[]): boolean {
    if (!root) return false
    // 找到当前节点并且处理下面的节点
    if (root.val === target) {
      getDeepNode(root, 0, k, ans)
      return true
    }

    // 处理目标节点的祖先节点
    if (getResult(root.left, target, k, ans)) {
      // cnt 是和目标节点的层级差
      k -= (++cnt)
      // 当 k 为 0 时。代表是最上方了，不需要再寻找另一侧子节点
      if (k === 0)
        ans.push(root.val)
      // 处理另一侧的节点，层级是 k - 1
      getDeepNode(root.right, 0, k - 1, ans)
      return true
    }

    // 同上
    if (getResult(root.right, target, k, ans)) {
      k -= (++cnt)
      if (k === 0)
        ans.push(root.val)
      getDeepNode(root.left, 0, k - 1, ans)
      return true
    }
    return false
  }
}

/**
 * @description: 对当前节点的 k 层子节点做 push 操作
 */
function getDeepNode(root: TreeNode | null, ind: number, k: number, ans: number[]): void {
  if (!root)
    return
  if (ind === k) {
    ans.push(root.val)
    return
  }
  getDeepNode(root.left, ind + 1, k, ans)
  getDeepNode(root.right, ind + 1, k, ans)
}

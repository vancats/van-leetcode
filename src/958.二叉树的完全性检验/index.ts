import type { TreeNode } from './../../utils/TreeNode'
/**
 * @description: 层序遍历方式 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 */
export function isCompleteTree(root: TreeNode | null): boolean {
  const stack: TreeNode[] = [root!]
  // 记录当前行的节点数量
  let num = 1
  // 记录当前行是否为最后一行
  let isEnd = false
  while (stack.length) {
    const cnt = stack.length
    for (let i = 0; i < cnt; i++) {
      const val = stack.shift()!
      const left = val.left
      const right = val.right
      console.log(cnt, left && left.val, right && right.val)
      // 如果只有右节点
      if (!left && right) return false
      // 如果已经是最后一行并且还有字节点
      if (isEnd && left) return false
      // 如果没有右子节点或者节点数不够两行，标记此时为最后一行
      if (!right || num > cnt) isEnd = true
      left && stack.push(left)
      right && stack.push(right)
    }
    num *= 2
  }
  return true
}

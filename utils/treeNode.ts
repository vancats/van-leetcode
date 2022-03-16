export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

type TreeNodeArrayItem = number | null

/**
 * @description: 数组转树
 * @param  arr
 * @return treenode | null
 */
export function createTreeNode(arr: TreeNodeArrayItem[]): TreeNode | null {
  if (!arr.length || arr[0] === null) return null
  const rootTree = new TreeNode(arr.shift()!)
  const queue: TreeNode[] = [rootTree]
  while (arr.length) {
    const tree = queue.pop()!
    const num1 = arr.shift()
    if (num1 || num1 === 0) {
      tree.left = new TreeNode(num1)
      queue.unshift(tree.left)
    }
    const num2 = arr.shift()
    if (num2 || num2 === 0) {
      tree.right = new TreeNode(num2)
      queue.unshift(tree.right)
    }
  }
  return rootTree
}
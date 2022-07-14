import type { TreeNode } from '../../utils/TreeNode'

export class BSTIterator {
  public arr: number[] = []
  constructor(root: TreeNode | null) {
    this.initArr(root)
  }

  initArr(root: TreeNode | null): void {
    if (!root) return
    this.initArr(root.left)
    this.arr.push(root.val)
    this.initArr(root.right)
  }

  next(): number {
    return this.arr.shift()!
  }

  hasNext(): boolean {
    return !!this.arr.length
  }
}

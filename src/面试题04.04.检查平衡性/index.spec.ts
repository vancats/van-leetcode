import type { TreeNode } from '../../utils/TreeNode'
import { createTreeNode } from '../../utils/TreeNode'
import { isBalanced1, isBalanced2 } from './index'
describe('面试题04.04.检查平衡性', () => {
  describe('自顶向下', () => {
    testCase(isBalanced1)
  })

  describe('自底向上', () => {
    testCase(isBalanced2)
  })
})

function testCase(fn: (root: TreeNode | null) => boolean) {
  it('示例一', () => {
    const root: TreeNode | null = createTreeNode([3, 9, 20, null, null, 15, 7])
    const result = fn(root)
    expect(result).toBe(true)
  })

  it('示例一', () => {
    const root: TreeNode | null = createTreeNode([1, 2, 2, 3, 3, null, null, 4, 4])
    const result = fn(root)
    expect(result).toBe(false)
  })
}

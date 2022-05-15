import type { TreeNode } from '../../utils/TreeNode'
import { createTreeNode } from '../../utils/TreeNode'
import { inorderSuccessor1, inorderSuccessor2 } from '.'

describe('面试题04.06.后继者', () => {
  describe('1', () => {
    testCase(inorderSuccessor1)
  })

  describe('2', () => {
    testCase(inorderSuccessor2)
  })
})

function testCase(fn: (root: TreeNode | null, p: TreeNode | null) => TreeNode | null) {
  it('示例一', () => {
    expect(fn(createTreeNode([2, 1, 3]), createTreeNode([1]))).toStrictEqual(createTreeNode([2, 1, 3]))
  })

  it('示例二', () => {
    expect(fn(createTreeNode([5, 3, 6, 2, 4, null, null, 1]), createTreeNode([6]))).toStrictEqual(createTreeNode([]))
  })
}

import type { TreeNode } from '../../utils/TreeNode'
import { createTreeNode } from '../../utils/TreeNode'
import { pathSum, pathSum1 } from '.'

describe('437.路径总和III', () => {
  describe('前缀和', () => {
    testCase(pathSum)
  })

  describe('DFS', () => {
    testCase(pathSum1)
  })
})

function testCase(fn: (root: (TreeNode | null), targetSum: number) => number) {
  it('示例一', () => {
    expect(fn(createTreeNode([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 8)).toBe(3)
  })

  it('示例二', () => {
    expect(fn(createTreeNode([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22)).toBe(3)
  })
}

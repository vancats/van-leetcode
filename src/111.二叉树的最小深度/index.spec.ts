import { createTreeNode } from '../../utils/TreeNode'
import { minDepth } from '.'

describe('111.二叉树的最小深度', () => {
  it('示例一', () => {
    expect(minDepth(createTreeNode([3, 9, 20, null, null, 15, 7]))).toBe(2)
  })

  it('示例二', () => {
    expect(minDepth(createTreeNode([2, null, 3, null, 4, null, 5, null, 6]))).toBe(5)
  })
})

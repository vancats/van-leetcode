import { createTreeNode } from '../../utils/TreeNode'
import { generateTrees } from './index'

describe('95.不同的二叉搜索树II', () => {
  it('示例一', () => {
    expect(generateTrees(3)).toStrictEqual([createTreeNode([1, null, 2, null, 3]), createTreeNode([1, null, 3, 2]), createTreeNode([2, 1, 3]), createTreeNode([3, 1, null, null, 2]), createTreeNode([3, 2, null, 1])])
  })

  it('示例一', () => {
    expect(generateTrees(1)).toStrictEqual([createTreeNode([1])])
  })
})

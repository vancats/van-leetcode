import { createTreeNode } from '../../utils/TreeNode'
import { isCompleteTree } from '.'

describe('958.二叉树的完全性检验', () => {
  it('示例一', () => {
    expect(isCompleteTree(createTreeNode([1, 2, 3, 4, 5, 6]))).toBe(true)
  })

  it('示例二', () => {
    expect(isCompleteTree(createTreeNode([1, 2, 3, 4, 5, null, 7]))).toBe(false)
  })
})

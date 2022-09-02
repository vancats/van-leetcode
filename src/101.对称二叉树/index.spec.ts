import { createTreeNode } from '../../utils/TreeNode'
import { isSymmetric } from '.'

describe('101.对称二叉树', () => {
  it('示例一', () => {
    expect(isSymmetric(createTreeNode([1, 2, 2, 3, 4, 4, 3]))).toBe(true)
  })

  it('示例二', () => {
    expect(isSymmetric(createTreeNode([1, 2, 2, null, 3, null, 3]))).toBe(false)
  })
})

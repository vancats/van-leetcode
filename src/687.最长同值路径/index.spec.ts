import { createTreeNode } from '../../utils/TreeNode'
import { longestUnivaluePath } from '.'

describe('687.最长同值路径', () => {
  it('示例一', () => {
    expect(longestUnivaluePath(createTreeNode([5, 4, 5, 1, 1, 5]))).toBe(2)
  })

  it('示例二', () => {
    expect(longestUnivaluePath(createTreeNode([1, 4, 5, 4, 4, 5]))).toBe(2)
  })

  it('示例三', () => {
    expect(longestUnivaluePath(createTreeNode([1, null, 1, 1, 1, 1, 1, 1]))).toBe(4)
  })
})

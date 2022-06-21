import { createTreeNode } from '../../utils/TreeNode'
import { rob } from '.'

describe('337.打家劫舍III', () => {
  it('示例一', () => {
    expect(rob(createTreeNode([3, 2, 3, null, 3, null, 1]))).toBe(7)
  })

  it('示例一', () => {
    expect(rob(createTreeNode([3, 4, 5, 1, 3, null, 1]))).toBe(9)
  })
})

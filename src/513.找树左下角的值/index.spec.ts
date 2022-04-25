import { createTreeNode } from '../../utils/TreeNode'
import { findBottomLeftValue } from '.'

describe('513.找树左下角的值', () => {
  it('示例一', () => {
    expect(findBottomLeftValue(createTreeNode([2, 1, 3]))).toBe(1)
  })

  it('示例二', () => {
    expect(findBottomLeftValue(createTreeNode([1, 2, 3, 4, null, 5, 6, null, null, 7]))).toBe(7)
  })
})

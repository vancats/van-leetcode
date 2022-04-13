import { createTreeNode } from '../../utils/TreeNode'
import { distributeCoins } from '.'

describe('979.在二叉树中分配硬币', () => {
  it('示例一', () => {
    expect(distributeCoins(createTreeNode([3, 0, 0]))).toBe(2)
  })

  it('示例二', () => {
    expect(distributeCoins(createTreeNode([0, 3, 0]))).toBe(3)
  })

  it('示例三', () => {
    expect(distributeCoins(createTreeNode([1, 0, 2]))).toBe(2)
  })

  it('示例四', () => {
    expect(distributeCoins(createTreeNode([1, 0, 0, null, 3]))).toBe(4)
  })
})

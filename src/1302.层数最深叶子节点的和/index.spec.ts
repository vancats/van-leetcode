import { createTreeNode } from '../../utils/TreeNode'
import { deepestLeavesSum } from './index'

describe('1302.层数最深叶子节点的和', () => {
  it('示例一', () => {
    const root = createTreeNode([1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8])
    expect(deepestLeavesSum(root)).toBe(15)
  })

  it('示例二', () => {
    const root = createTreeNode([6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5])
    expect(deepestLeavesSum(root)).toBe(19)
  })
})

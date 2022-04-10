import { createTreeNode } from '../../utils/TreeNode'
import { balanceBST } from './index'

describe('1382.将二叉搜索树变平衡', () => {
  it('示例', () => {
    const root = balanceBST(createTreeNode([1, null, 2, null, 3, null, 4, null, null]))
    const expected = createTreeNode([2, 1, 3, null, null, null, 4])
    expect(root).toStrictEqual(expected)
  })
})

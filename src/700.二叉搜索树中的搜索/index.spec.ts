import { createTreeNode } from '../../utils/TreeNode'
import { searchBST } from '.'

describe('700.二叉搜索树中的搜索', () => {
  it('示例一', () => {
    const root = createTreeNode([4, 2, 7, 1, 3])
    const result = searchBST(root, 2)
    const expected = createTreeNode([2, 1, 3])
    expect(result).toStrictEqual(expected)
  })

  it('示例二', () => {
    const root = createTreeNode([4, 2, 7, 1, 3])
    const result = searchBST(root, 5)
    const expected = createTreeNode([])
    expect(result).toStrictEqual(expected)
  })
})

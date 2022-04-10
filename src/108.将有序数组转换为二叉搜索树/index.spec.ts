import { createTreeNode } from '../../utils/TreeNode'
import { sortedArrayToBST } from './index'

describe('108.将有序数组转换为二叉搜索树', () => {
  it('示例一', () => {
    const root = sortedArrayToBST([-10, -3, 0, 5, 9])
    const expected = createTreeNode([0, -10, 5, null, -3, null, 9])
    expect(root).toStrictEqual(expected)
  })

  it('示例二', () => {
    const root = sortedArrayToBST([1, 3])
    const expected = createTreeNode([1, null, 3])
    expect(root).toStrictEqual(expected)
  })
})

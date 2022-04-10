import { createTreeNode } from '../../utils/TreeNode'
import { isValidBST } from './index'
describe('98.验证二叉搜索树', () => {
  it('示例一', () => {
    const root = createTreeNode([2, 1, 3])
    const result = isValidBST(root)
    expect(result).toStrictEqual(true)
  })

  it('示例二', () => {
    const root = createTreeNode([5, 1, 4, null, null, 3, 6])
    const result = isValidBST(root)
    expect(result).toStrictEqual(false)
  })
})

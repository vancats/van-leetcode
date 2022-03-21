import { createTreeNode } from '../../utils/TreeNode'
import { tree2str } from './index'

describe('606.根据二叉树创建字符串', () => {
  it('示例一', () => {
    const root = createTreeNode([1, 2, 3, 4])
    const result = tree2str(root)
    expect(result).toBe('1(2(4))(3)')
  })

  it('示例二', () => {
    const root = createTreeNode([1, 2, 3, null, 4])
    const result = tree2str(root)
    expect(result).toBe('1(2()(4))(3)')
  })
})
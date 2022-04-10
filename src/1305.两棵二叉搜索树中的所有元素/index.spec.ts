import { createTreeNode } from '../../utils/TreeNode'
import { getAllElements } from './index'

describe('1305.两棵二叉搜索树中的所有元素', () => {
  it('示例一', () => {
    const root1 = createTreeNode([2, 1, 4])
    const root2 = createTreeNode([1, 0, 3])
    expect(getAllElements(root1, root2)).toStrictEqual([0, 1, 1, 2, 3, 4])
  })

  it('示例二', () => {
    const root1 = createTreeNode([1, null, 8])
    const root2 = createTreeNode([8, 1])
    expect(getAllElements(root1, root2)).toStrictEqual([1, 1, 8, 8])
  })
})

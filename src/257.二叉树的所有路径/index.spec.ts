import { createTreeNode } from '../../utils/TreeNode'
import { binaryTreePaths } from './index'

describe('257.二叉树的所有路径', () => {
  it('示例一', () => {
    const root = createTreeNode([1, 2, 3, null, 5])
    expect(binaryTreePaths(root)).toStrictEqual(['1->2->5', '1->3'])
  })

  it('示例二', () => {
    const root = createTreeNode([1])
    expect(binaryTreePaths(root)).toStrictEqual(['1'])
  })
})

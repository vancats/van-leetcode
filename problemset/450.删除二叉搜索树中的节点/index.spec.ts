import { createTreeNode } from "../../utils/TreeNode"
import { deleteNode } from './index'

describe('450.删除二叉搜索树中的节点', () => {
  it('示例一', () => {
    const root = createTreeNode([5, 3, 6, 2, 4, null, 7])
    const result = deleteNode(root, 3)
    const expected = createTreeNode([5, 2, 6, null, 4, null, 7])
    expect(result).toStrictEqual(expected)
  })

  it('示例二', () => {
    const root = createTreeNode([5, 3, 6, 2, 4, null, 7])
    const result = deleteNode(root, 0)
    const expected = createTreeNode([5, 3, 6, 2, 4, null, 7])
    expect(result).toStrictEqual(expected)
  })

  it('示例三', () => {
    const root = createTreeNode([])
    const result = deleteNode(root, 0)
    const expected = createTreeNode([])
    expect(result).toStrictEqual(expected)
  })
})
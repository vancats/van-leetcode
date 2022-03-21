import { createTreeNode } from "../../utils/TreeNode"
import { insertIntoBST } from './index'

describe('701.二叉搜索树中的插入操作', () => {
  it('示例一', () => {
    const root = createTreeNode([4, 2, 7, 1, 3])
    const result = insertIntoBST(root, 5)
    const expected = createTreeNode([4, 2, 7, 1, 3, 5])
    expect(result).toStrictEqual(expected)
  })

  it('示例二', () => {
    const root = createTreeNode([40, 20, 60, 10, 30, 50, 70])
    const result = insertIntoBST(root, 25)
    const expected = createTreeNode([40, 20, 60, 10, 30, 50, 70, null, null, 25])
    expect(result).toStrictEqual(expected)
  })

  it('示例三', () => {
    const root = createTreeNode([4, 2, 7, 1, 3, null, null, null, null, null, null])
    const result = insertIntoBST(root, 5)
    const expected = createTreeNode([4, 2, 7, 1, 3, 5])
    expect(result).toStrictEqual(expected)
  })
})
import { invertTree } from './index'
import { TreeNode, createTreeNode } from "../../utils/TreeNode"
describe('226.翻转二叉树', () => {
  testCase(invertTree)
})

function testCase(fn: (root: TreeNode | null) => TreeNode | null) {
  it('示例一', () => {
    const root = createTreeNode([4, 2, 7, 1, 3, 6, 9])
    const expected = createTreeNode([4, 7, 2, 9, 6, 3, 1])
    expect(fn(root)).toStrictEqual(expected)
  })

  it('示例二', () => {
    const root = createTreeNode([2, 1, 3])
    const expected = createTreeNode([2, 3, 1])
    expect(fn(root)).toStrictEqual(expected)
  })

  it('示例三', () => {
    const root = createTreeNode([])
    const expected = createTreeNode([])
    expect(fn(root)).toStrictEqual(expected)
  })
}
import { createTreeNode } from '../../utils/TreeNode'
import { lowestCommonAncestor } from './index'

describe('面试题04.08.首console.log();个共同祖先', () => {
  it('示例一', () => {
    const root = createTreeNode([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
    const p = createTreeNode([5, 6, 2, null, null, 7, 4])
    const q = createTreeNode([1, 0, 8])
    const result = lowestCommonAncestor(root, p, q)
    expect(result).toStrictEqual(root)
  })

  it('示例二', () => {
    const root = createTreeNode([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
    const p = createTreeNode([5, 6, 2, null, null, 7, 4])
    const q = createTreeNode([4])
    const result = lowestCommonAncestor(root, p, q)
    expect(result).toStrictEqual(root)
  })
})
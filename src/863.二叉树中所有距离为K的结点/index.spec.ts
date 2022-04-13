
import { createTreeNode } from '../../utils/TreeNode'
import { distanceK } from '.'

describe('863.二叉树中所有距离为K的结点', () => {
  it('示例一', () => {
    expect(distanceK(createTreeNode([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), createTreeNode([5]), 2)).toStrictEqual([7, 4, 1])
  })

  it('示例二', () => {
    expect(distanceK(createTreeNode([1]), createTreeNode([1]), 3)).toStrictEqual([])
  })
})

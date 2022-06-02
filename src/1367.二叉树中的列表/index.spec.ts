import { createTreeNode } from '../../utils/TreeNode'
import { createListNode } from '../../utils/ListNode'
import { isSubPath } from '.'

describe('1367.二叉树中的列表', () => {
  it('示例一', () => {
    expect(isSubPath(createListNode([4, 2, 8]), createTreeNode([1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3]))).toBe(true)
  })

  it('示例二', () => {
    expect(isSubPath(createListNode([1, 4, 2, 6]), createTreeNode([1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3]))).toBe(true)
  })

  it('示例三', () => {
    expect(isSubPath(createListNode([1, 4, 2, 6, 8]), createTreeNode([1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3]))).toBe(false)
  })
})

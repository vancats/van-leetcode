import { createTreeNode } from '../../utils/TreeNode'
import { findFrequentTreeSum } from '.'

describe('508.出现次数最多的子树元素和', () => {
  it('示例一', () => {
    expect(findFrequentTreeSum(createTreeNode([5, 2, -3]))).toStrictEqual([2, -3, 4])
  })

  it('示例二', () => {
    expect(findFrequentTreeSum(createTreeNode([5, 2, -5]))).toStrictEqual([2])
  })
})

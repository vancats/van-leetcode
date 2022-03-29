import { pathSum } from "."
import { createTreeNode } from "../../utils/TreeNode"

describe('面试题04.12.求和路径', () => {
  it('示例一', () => {
    const root = createTreeNode([5, 4, 8, 11, 13, 4, null, 7, 2, null, null, null, null, 5, 1])
    expect(pathSum(root, 22)).toBe(3)
  })

  it('示例二', () => {
    const root = createTreeNode([1, 2, null, 3, null, 4, null, 5])
    expect(pathSum(root, 6)).toBe(1)
  })
})
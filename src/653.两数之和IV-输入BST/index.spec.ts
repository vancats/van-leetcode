import { findTarget } from "./index"
import { createTreeNode } from "../../utils/TreeNode"

describe('653.两数之和IV-输入BST', () => {
  it('示例一', () => {
    const root = createTreeNode([5, 3, 6, 2, 4, null, 7])
    const result = findTarget(root, 9)
    expect(result).toBe(true)
  })

  it('示例二', () => {
    const root = createTreeNode([5, 3, 6, 2, 4, null, 7])
    const result = findTarget(root, 28)
    expect(result).toBe(false)
  })
})

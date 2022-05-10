import { createTreeNode } from '../../utils/TreeNode'
import { deserialize, serialize } from '.'

describe('449.序列化和反序列化二叉搜索树', () => {
  it('示例一', () => {
    expect(deserialize(serialize(createTreeNode([2, 1, 3])))).toStrictEqual(createTreeNode([2, 1, 3]))
  })

  it('示例二', () => {
    expect(deserialize(serialize(createTreeNode([])))).toStrictEqual(createTreeNode([]))
  })

  it('示例三', () => {
    expect(deserialize(serialize(createTreeNode([3, 2, 4, 1])))).toStrictEqual(createTreeNode([3, 2, 4, 1]))
  })
})

import { createTreeNode } from '../../utils/TreeNode'
import { lowestCommonAncestor } from '.'

describe('235.二叉搜索树的最近公共祖先', () => {
    it('示例', () => {
        const root = createTreeNode([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
        const p = root?.left || null
        const q = root?.right || null
        expect(lowestCommonAncestor(root, p, q)).toStrictEqual(root)
    })
})

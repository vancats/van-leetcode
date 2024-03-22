import { createTreeNode } from '../../utils/TreeNode'
import { flatten } from '.'

describe('114.二叉树展开为链表', () => {
    it('示例一', () => {
        const root = createTreeNode([1, 2, 5, 3, 4, null, 6])
        flatten(root)
        expect(root).toStrictEqual(createTreeNode([1, null, 2, null, 3, null, 4, null, 5, null, 6]))
    })

    it('示例二', () => {
        const root = createTreeNode([])
        flatten(root)
        expect(root).toStrictEqual(createTreeNode([]))
    })

    it('示例三', () => {
        const root = createTreeNode([0])
        flatten(root)
        expect(root).toStrictEqual(createTreeNode([0]))
    })
})

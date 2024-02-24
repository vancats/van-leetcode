import { createTreeNode } from '../../utils/TreeNode'
import { closestNodes } from '.'

describe('2476.二叉搜索树最近节点查询', () => {
    it('示例一', () => {
        const root = createTreeNode([6, 2, 13, 1, 4, 9, 15, null, null, null, null, null, null, 14])
        const queries = [2, 5, 16]
        expect(closestNodes(root, queries)).toStrictEqual([[2, 2], [4, 6], [15, -1]])
    })

    it('示例二', () => {
        const root = createTreeNode([4, null, 9])
        const queries = [3]
        expect(closestNodes(root, queries)).toStrictEqual([[-1, 4]])
    })
})

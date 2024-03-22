import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {TreeNode} root
 */
export function flatten(root: TreeNode | null) {
    if (!root) return null
    convertTree(root)
}

function convertTree(root: TreeNode) {
    if (!root.left && !root.right) {
        return { start: root, end: root }
    }
    const left = root.left
    root.left = null
    if (!left) {
        const { start, end } = convertTree(root.right!)
        root.right = start
        end.right = null
        return { start: root, end }
    }
    if (!root.right) {
        const { start, end } = convertTree(left)
        root.right = start
        end.right = null
        return { start: root, end }
    }
    const { start: leftStart, end: leftEnd } = convertTree(left)
    const { start: rightStart, end: rightEnd } = convertTree(root.right)
    root.right = leftStart
    leftEnd.right = rightStart
    rightEnd.right = null
    return { start: root, end: rightEnd }
}

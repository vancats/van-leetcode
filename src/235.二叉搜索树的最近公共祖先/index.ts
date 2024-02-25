import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N) N 是节点数量
 * @return {*}
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 */
export function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null,
): TreeNode | null {
    if (!p || !q) return null
    const map: Map<TreeNode, TreeNode> = new Map()
    traverseNode(root, null, map)
    const ancestor: Set<TreeNode> = new Set()
    while (p) {
        ancestor.add(p)
        p = map.get(p) || null
    }
    while (q) {
        if (ancestor.has(q)) {
            return q
        }
        q = map.get(q) || null
    }
    return null
}

function traverseNode(root: TreeNode | null, parent: TreeNode | null, map: Map<TreeNode, TreeNode | null>) {
    if (!root) return
    map.set(root, parent)
    traverseNode(root.left, root, map)
    traverseNode(root.right, root, map)
}

import { type TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(N + QlgQ) 空间复杂度 O(N) N: 节点数量 Q: queries 长度
 * @return {*}
 * @param {TreeNode} root
 * @param {number} queries
 */
export function closestNodes(root: TreeNode | null, queries: number[]): number[][] {
    const orderTree: number[] = []
    getMiddleOrderTree(root, orderTree)
    return queries.map(query => {
        const index = findNearestItem(orderTree, query)
        const left = orderTree[index] || -1
        if (left === query) {
            return [left, left]
        }
        const right = orderTree[index + 1] || -1
        return [left, right]
    })
}

function getMiddleOrderTree(root: TreeNode | null, orderTree: number[]) {
    if (!root) return
    getMiddleOrderTree(root.left, orderTree)
    orderTree.push(root.val)
    getMiddleOrderTree(root.right, orderTree)
}

function findNearestItem(orderTree: number[], target: number) {
    let left = -1
    let right = orderTree.length - 1
    while (left < right) {
        const mid = (left + right + 1) >> 1
        const cur = orderTree[mid]
        if (cur === target) {
            return mid
        }
        if (cur > target) {
            right = mid - 1
        }
        else {
            left = mid
        }
    }
    return left
}

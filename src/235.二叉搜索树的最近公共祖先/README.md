# 235.二叉搜索树的最近公共祖先

> 难度：中等

## 题目

给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

### 示例

#### 示例 1:

```
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6
解释: 节点 2 和节点 8 的最近公共祖先是 6。
```

#### 示例 2:

```
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
```

### 说明:

```
所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉搜索树中。
```

## 题解

```ts
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
```

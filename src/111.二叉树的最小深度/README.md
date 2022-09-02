# 111.二叉树的最小深度

> 难度：非常简单

## 题目

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

### 示例 

#### 示例 1：

```
输入：root = [3,9,20,null,null,15,7]
输出：2
```

#### 示例 2：

```
输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
```

### 提示：

```
树中节点数的范围在 [0, 105] 内
-1000 <= Node.val <= 1000
```

## 题解

```ts
import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(H)
 * @return {*}
 * @param {TreeNode} root
 */
export function minDepth(root: TreeNode | null): number {
  if (!root) return 0
  if (!root.left && !root.right) return 1
  if (!root.left) return 1 + minDepth(root.right)
  if (!root.right) return 1 + minDepth(root.left)
  return 1 + Math.min(minDepth(root.left), minDepth(root.right))
}
```

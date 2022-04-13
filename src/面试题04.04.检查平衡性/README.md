# 面试题04.04.检查平衡性

> 难度：简单
>
> https://leetcode-cn.com/problems/check-balance-lcci/

## 题目

实现一个函数，检查二叉树是否平衡。在这个问题中，平衡树的定义如下：任意一个节点，其两棵子树的高度差不超过 1。

### 示例

#### 示例 1:

```
给定二叉树 [3,9,20,null,null,15,7]
    3
   / \
  9  20
    /  \
   15   7
返回 true
```

#### 示例 2:

```
给定二叉树 [1,2,2,3,3,null,null,4,4]
      1
     / \
    2   2
   / \
  3   3
 / \
4   4
返回 false
```

## 题解

```typescript
import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 */
export function isBalanced1(root: TreeNode | null): boolean {
  if (!root)
    return true
  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1)
    return false
  return isBalanced1(root.left) && isBalanced1(root.right)
}

function getHeight(root: TreeNode | null): number {
  if (!root)
    return 0
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1
}

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 */
export function isBalanced2(root: TreeNode | null): boolean {
  return isHeight(root) >= 0
}

function isHeight(root: TreeNode | null): number {
  if (!root)
    return 0
  const leftHeight = isHeight(root.left)
  const rightHeight = isHeight(root.right)
  if (leftHeight < 0 || rightHeight < 0 || Math.abs(leftHeight - rightHeight) > 1)
    return -1
  return Math.max(leftHeight, rightHeight) + 1
}
```

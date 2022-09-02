# 101.对称二叉树

> 难度：简单

## 题目

给你一个二叉树的根节点 root ， 检查它是否轴对称。

### 示例

#### 示例 1：

```
输入：root = [1,2,2,3,4,4,3]
输出：true
```

#### 示例 2：

```
输入：root = [1,2,2,null,3,null,3]
输出：false
```

### 提示：

```
树中节点数目在范围 [1, 1000] 内
-100 <= Node.val <= 100
```

> 进阶：你可以运用递归和迭代两种方法解决这个问题吗？

## 题解

```ts
import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(lgN) 空间复杂度 O(lgN)
 * @return {*}
 * @param {TreeNode} root
 */
export function isSymmetric(root: TreeNode | null): boolean {
  return isTraverse(root!.left, root!.right)
}

function isTraverse(left: TreeNode | null, right: TreeNode | null): boolean {
  if (!left && !right) return true
  if (!left || !right) return false
  return left.val === right.val && isTraverse(left.left, right.right) && isTraverse(left.right, right.left)
}
```

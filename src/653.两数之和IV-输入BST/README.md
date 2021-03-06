# 653.两数之和IV-输入BST

> 难度：非常简单
>
> https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/

## 题目

给定一个二叉搜索树 root 和一个目标结果 k，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。

### 示例

#### 示例 1：

![](https://assets.leetcode.com/uploads/2020/09/21/sum_tree_1.jpg)
```
输入: root = [5,3,6,2,4,null,7], k = 9
输出: true
```

#### 示例 2：

![](https://assets.leetcode.com/uploads/2020/09/21/sum_tree_2.jpg)
```
输入: root = [5,3,6,2,4,null,7], k = 28
输出: false
```

### 提示:

```
二叉树的节点个数的范围是  [1, 104].
-104 <= Node.val <= 104
root 为二叉搜索树
-105 <= k <= 105
```

## 题解
```typescript
import { TreeNode } from "../../utils/TreeNode"
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 * @param {number} k
 */
export function findTarget(root: TreeNode | null, k: number, set: Set<number> = new Set()): boolean {
  if (!root) return false
  if (set.has(root.val)) return true
  set.add(k - root.val)
  return findTarget(root.left, k, set) || findTarget(root.right, k, set)
}
```
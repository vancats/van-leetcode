# 面试题04.08.首个共同祖先

> 难度：中等
>
> https://leetcode-cn.com/problems/first-common-ancestor-lcci/

## 题目

设计并实现一个算法，找出二叉树中某两个节点的第一个共同祖先。不得将其他的节点存储在另外的数据结构中。注意：这不一定是二叉搜索树。

例如，给定如下二叉树: root = [3,5,1,6,2,0,8,null,null,7,4]
```
    3
   / \
  5   1
 / \ / \
6  2 0  8
  / \
 7   4
```

### 示例

#### 示例 1:

```
输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
```
#### 示例 2:

```
输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出: 5
解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
```

### 说明:

```
所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉树中。
```

## 题解

```typescript
import { sameTree, TreeNode } from "../../utils/TreeNode"
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 */
export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  /**
   * 返回值定义：
   *  如果当前是 p 或 q，直接返回
   *  递归查询，如果左右子树分别有值，则该节点就是最近的祖先节点
   */
  if (!root) return null
  if (sameTree(root, p) || sameTree(root, q)) return root
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)
  if (left && right) return root
  if (left) return left
  return right
}

```
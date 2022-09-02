# 687.最长同值路径

> 难度：中等

## 题目

给定一个二叉树的 root ，返回 最长的路径的长度 ，这个路径中的 每个节点具有相同值 。 这条路径可以经过也可以不经过根节点。

两个节点之间的路径长度 由它们之间的边数表示。

### 示例

#### 示例 1:

![](https://assets.leetcode.com/uploads/2020/10/13/ex1.jpg)
```
输入：root = [5,4,5,1,1,5]
输出：2
```

#### 示例 2:

![](https://assets.leetcode.com/uploads/2020/10/13/ex2.jpg)
```
输入：root = [1,4,5,4,4,5]
输出：2
```

### 提示:

```
树的节点数的范围是 [0, 104] 
-1000 <= Node.val <= 1000
树的深度将不超过 1000 
```

## 题解

```ts
import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 */
export function longestUnivaluePath(root: TreeNode | null): number {
  return getNum(root)[2] - 1
}

/**
 * @return {
 *  0: 以该节点往左走的路径最大值
 *  1: 以该节点往右走的路径最大值
 *  2: 该节点或该节点的子节点中的路径最大值
 * }
 * @param {TreeNode} root
 */
function getNum(root: TreeNode | null): number[] {
  if (!root) return [1, 1, 1]
  const left = getNum(root.left)
  const right = getNum(root.right)
  /// left 和 right 后续计算需使用; curMax 是最终值
  let leftNum = 1
  let rightNum = 1
  let curMax = 1
  if (root.left && root.val === root.left.val) {
    leftNum += Math.max(left[0], left[1])
    curMax += Math.max(left[0], left[1])
  }

  if (root.right && root.val === root.right.val) {
    rightNum += Math.max(right[0], right[1])
    curMax += Math.max(right[0], right[1])
  }

  curMax = Math.max(curMax, left[2], right[2])
  return [leftNum, rightNum, curMax]
}
```

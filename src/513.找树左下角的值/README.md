# 513.找树左下角的值

> 难度：简单
>
> https://leetcode-cn.com/problems/find-bottom-left-tree-value/

## 题目

给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。

假设二叉树中至少有一个节点。

### 示例

#### 示例 1:

![](https://assets.leetcode.com/uploads/2020/12/14/tree1.jpg)
```
输入: root = [2,1,3]
输出: 1
```

#### 示例 2:

![](https://assets.leetcode.com/uploads/2020/12/14/tree2.jpg)
```
输入: [1,2,3,4,null,5,6,null,null,7]
输出: 7
```

### 提示:

```
二叉树的节点个数的范围是 [1,104]
-231 <= Node.val <= 231 - 1 
```

## 题解

```ts
import type { TreeNode } from './../../utils/TreeNode'
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 */
export function findBottomLeftValue(root: TreeNode | null): number {
  const queue: TreeNode[] = [root!]
  let res = Infinity
  while (queue.length) {
    const len = queue.length
    res = queue[0].val
    for (let i = 0; i < len; i++) {
      const cur = queue.shift()!
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
  }
  return res
}
```

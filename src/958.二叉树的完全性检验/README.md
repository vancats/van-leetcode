# 958.二叉树的完全性检验

> 难度：中等
>
> https://leetcode.cn/problems/check-completeness-of-a-binary-tree/

## 题目

给定一个二叉树的 root ，确定它是否是一个 完全二叉树 。

在一个 完全二叉树 中，除了最后一个关卡外，所有关卡都是完全被填满的，并且最后一个关卡中的所有节点都是尽可能靠左的。它可以包含 1 到 2h 节点之间的最后一级 h 。

### 示例

#### 示例 1：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/15/complete-binary-tree-1.png)
```
输入：root = [1,2,3,4,5,6]
输出：true
解释：最后一层前的每一层都是满的（即，结点值为 {1} 和 {2,3} 的两层），且最后一层中的所有结点（{4,5,6}）都尽可能地向左。
```

#### 示例 2：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/15/complete-binary-tree-2.png)
```
输入：root = [1,2,3,4,5,null,7]
输出：false
解释：值为 7 的结点没有尽可能靠向左侧。
```

### 提示：

```
树的结点数在范围  [1, 100] 内。
1 <= Node.val <= 1000
```

## 题解

```ts
import type { TreeNode } from './../../utils/TreeNode'
/**
 * @description: 层序遍历方式 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 */
export function isCompleteTree(root: TreeNode | null): boolean {
  const stack: TreeNode[] = [root!]
  // 记录当前行的节点数量
  let num = 1
  // 记录当前行是否为最后一行
  let isEnd = false
  while (stack.length) {
    const cnt = stack.length
    for (let i = 0; i < cnt; i++) {
      const val = stack.shift()!
      const left = val.left
      const right = val.right
      console.log(cnt, left && left.val, right && right.val)
      // 如果只有右节点
      if (!left && right) return false
      // 如果已经是最后一行并且还有字节点
      if (isEnd && left) return false
      // 如果没有右子节点或者节点数不够两行，标记此时为最后一行
      if (!right || num > cnt) isEnd = true
      left && stack.push(left)
      right && stack.push(right)
    }
    num *= 2
  }
  return true
}
```

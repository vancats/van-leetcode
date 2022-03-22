# 1302.层数最深叶子节点的和

> 难度：中等
>
> https://leetcode-cn.com/problems/deepest-leaves-sum/

## 题目

给你一棵二叉树的根节点 root ，请你返回 层数最深的叶子节点的和。

### 示例

#### 示例 1：

```
输入：root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
输出：15
```

#### 示例 2：

```
输入：root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
输出：19
```

### 提示：

```
树中节点数目在范围 [1, 104] 之间。
1 <= Node.val <= 100
```

## 题解

```typescript
import { TreeNode } from "../../utils/TreeNode"
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 */
export function deepestLeavesSum(root: TreeNode | null): number {
  if (!root) return 0
  let stack: TreeNode[] = [root], res = 0
  while (stack.length) {
    res = 0
    let len = stack.length
    for (let i = 0; i < len; i++) {
      let temp = stack.shift()!
      res += temp.val
      temp.left && stack.push(temp.left)
      temp.right && stack.push(temp.right)
    }
  }
  return res
}
```
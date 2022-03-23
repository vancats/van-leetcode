# 257.二叉树的所有路径

> 难度：简单
>
> https://leetcode-cn.com/problems/binary-tree-paths/

## 题目


给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。

叶子节点 是指没有子节点的节点。

### 示例

#### 示例 1：

```
输入：root = [1,2,3,null,5]
输出：["1->2->5","1->3"]
```

#### 示例 2：

```
输入：root = [1]
输出：["1"]
```

### 提示：

```
树中节点的数目在范围 [1, 100] 内
-100 <= Node.val <= 100
```

## 题解

```typescript
import { TreeNode } from "../../utils/TreeNode"
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {TreeNode} root
 */
export function binaryTreePaths(root: TreeNode): string[] {
  const result: string[] = []
  const dfs = (root: TreeNode, stack: string = '') => {
    if (!root.left && !root.right) {
      stack += ('->' + root.val)
      result.push(stack.slice(2))
    } else {
      root.left && dfs(root.left, stack + '->' + root.val)
      root.right && dfs(root.right, stack + '->' + root.val)
    }
  }
  dfs(root)
  return result
}
```
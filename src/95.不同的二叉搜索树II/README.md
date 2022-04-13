# 95.不同的二叉搜索树II

> 难度：中等
>
> https://leetcode-cn.com/problems/unique-binary-search-trees-ii/

## 题目

给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。

### 示例

#### 示例 1：

```
输入：n = 3
输出：[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
```

#### 示例 2：

```
输入：n = 1
输出：[[1]]
```
 
### 提示：

```
1 <= n <= 8
```

## 题解

```typescript
import { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 待定
 * @return {*}
 * @param {number} n
 */
export function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0)
    return []
  return dfs(1, n)
}

function dfs(left: number, right: number): Array<TreeNode | null> {
  if (left > right)
    return [null]
  const ans: Array<TreeNode | null> = []
  // 递归得出所有节点
  for (let i = left; i <= right; i++) {
    // 分别得出左右节点的值
    const leftTree = dfs(left, i - 1)
    const rightTree = dfs(i + 1, right)
    for (const l of leftTree) {
      for (const r of rightTree)
        ans.push(new TreeNode(i, l, r))
    }
  }
  return ans
}
```

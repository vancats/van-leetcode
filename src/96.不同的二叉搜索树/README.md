# 96.不同的二叉搜索树

> 难度：中等

## 题目

给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。

### 示例

#### 示例 1：

![](https://assets.leetcode.com/uploads/2021/01/18/uniquebstn3.jpg)
```
输入：n = 3
输出：5
```

#### 示例 2：

```
输入：n = 1
输出：1
```

### 提示：

```
1 <= n <= 19
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N)
 * @return {*}
 * @param {number} n
 */
export function numTrees(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0)
  dp[0] = dp[1] = 1
  /// i 是当前数量
  for (let i = 2; i <= n; i++) {
    /// j 是当前左子树数量
    for (let j = 0; j < i; j++)
      dp[i] += dp[j] * dp[i - j - 1]
  }
  return dp[n]
}
```

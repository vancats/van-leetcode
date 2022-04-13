# 70.爬楼梯

> 难度：简单
>
> https://leetcode-cn.com/problems/climbing-stairs/

## 题目

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

### 示例

#### 示例 1：

```
输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
```

#### 示例 2：

```
输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
```

### 提示：

```
1 <= n <= 45
```

## 题解

```typescript
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} n
 */
export function climbStairs(n: number): number {
  const arr: number[] = new Array(n + 1)
  arr[1] = 1, arr[2] = 2
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}
```

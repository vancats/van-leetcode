# 746.使用最小花费爬楼梯

> 难度：中等
>
> https://leetcode.cn/problems/min-cost-climbing-stairs/

## 题目

给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。

你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。

请你计算并返回达到楼梯顶部的最低花费。

### 示例

#### 示例 1：

```
输入：cost = [10,15,20]
输出：15
解释：你将从下标为 1 的台阶开始。
- 支付 15 ，向上爬两个台阶，到达楼梯顶部。
总花费为 15 。
```

#### 示例 2：

```
输入：cost = [1,100,1,1,1,100,1,1,100,1]
输出：6
解释：你将从下标为 0 的台阶开始。
- 支付 1 ，向上爬两个台阶，到达下标为 2 的台阶。
- 支付 1 ，向上爬两个台阶，到达下标为 4 的台阶。
- 支付 1 ，向上爬两个台阶，到达下标为 6 的台阶。
- 支付 1 ，向上爬一个台阶，到达下标为 7 的台阶。
- 支付 1 ，向上爬两个台阶，到达下标为 9 的台阶。
- 支付 1 ，向上爬一个台阶，到达楼梯顶部。
总花费为 6 。
```

### 提示：

```
2 <= cost.length <= 1000
0 <= cost[i] <= 999
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} cost
 */
export function minCostClimbingStairs(cost: number[]): number {
  cost.push(0)
  const dp: number[] = new Array(cost.length + 1).fill(0)
  dp[1] = cost[0]
  for (let i = 1; i <= cost.length; i++)
    dp[i + 1] = Math.min(dp[i], dp[i - 1]) + cost[i]

  return dp[cost.length]
}

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} cost
 */
export function minCostClimbingStairs2(cost: number[]): number {
  cost.push(0)
  const dp: number[] = [cost[0], 0]
  for (let i = 1; i < cost.length; i++) {
    const ind = i % 2
    dp[ind] = Math.min(dp[0], dp[1]) + cost[i]
  }
  return dp[(cost.length + 1) % 2]
}
```

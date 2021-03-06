# 剑指OfferII091.粉刷房子

> 难度：中等

## 题目

假如有一排房子，共 n 个，每个房子可以被粉刷成红色、蓝色或者绿色这三种颜色中的一种，你需要粉刷所有的房子并且使其相邻的两个房子颜色不能相同。

当然，因为市场上不同颜色油漆的价格不同，所以房子粉刷成不同颜色的花费成本也是不同的。每个房子粉刷成不同颜色的花费是以一个 n x 3 的正整数矩阵 costs 来表示的。

例如，costs[0][0] 表示第 0 号房子粉刷成红色的成本花费；costs[1][2] 表示第 1 号房子粉刷成绿色的花费，以此类推。

请计算出粉刷完所有房子最少的花费成本。

### 示例

#### 示例 1：

```
输入: costs = [[17,2,17],[16,16,5],[14,3,19]]
输出: 10
解释: 将 0 号房子粉刷成蓝色，1 号房子粉刷成绿色，2 号房子粉刷成蓝色。
     最少花费: 2 + 5 + 3 = 10。
```

#### 示例 2：

```
输入: costs = [[7,6,2]]
输出: 2
```

### 提示:

```
costs.length == n
costs[i].length == 3
1 <= n <= 100
1 <= costs[i][j] <= 20
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} costs
 */
export function minCost(costs: number[][]): number {
  let dp: number[] = [0, 0, 0]
  for (let i = 1; i <= costs.length; i++) {
    const newDp: number[] = []
    newDp[0] = Math.min(dp[1], dp[2]) + costs[i - 1][0]
    newDp[1] = Math.min(dp[0], dp[2]) + costs[i - 1][1]
    newDp[2] = Math.min(dp[0], dp[1]) + costs[i - 1][2]
    dp = newDp
  }
  return Math.min(...dp)
}
```

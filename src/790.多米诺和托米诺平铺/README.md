# 790.多米诺和托米诺平铺

> 难度：中等

## 题目

有两种形状的瓷砖：一种是 2 x 1 的多米诺形，另一种是形如 "L" 的托米诺形。两种形状都可以旋转。



给定整数 n ，返回可以平铺 2 x n 的面板的方法的数量。返回对 109 + 7 取模 的值。

平铺指的是每个正方形都必须有瓷砖覆盖。两个平铺不同，当且仅当面板上有四个方向上的相邻单元中的两个，使得恰好有一个平铺有一个瓷砖占据两个正方形。

### 示例

#### 示例 1:

```
输入: n = 3
输出: 5
解释: 五种不同的方法如上所示。
```

#### 示例 2:

```
输入: n = 1
输出: 1
```

### 提示：

```
1 <= n <= 1000
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} n
 */
export function numTilings(n: number): number {
  /// 0: 两块都没 1: 上没 2: 下没 3: 全没
  const arr: number[][] = new Array(n + 1).fill(0).map(() => new Array(4).fill(0))
  const mod = 1e9 + 7
  arr[0][3] = 1
  for (let i = 1; i <= n; i++) {
    arr[i][0] = arr[i - 1][3]
    arr[i][1] = (arr[i - 1][0] + arr[i - 1][2]) % mod
    arr[i][2] = (arr[i - 1][0] + arr[i - 1][1]) % mod
    arr[i][3] = (arr[i - 1][0] + arr[i - 1][1] + arr[i - 1][2] + arr[i - 1][3]) % mod
  }
  return arr[n][3]
}
```

# 474.一和零

> 难度：中等
>
> https://leetcode.cn/problems/ones-and-zeroes/

## 题目

给你一个二进制字符串数组 strs 和两个整数 m 和 n 。

请你找出并返回 strs 的最大子集的长度，该子集中 最多 有 m 个 0 和 n 个 1 。

如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。

### 示例

#### 示例 1：

```
输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
输出：4
解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。
```

#### 示例 2：

```
输入：strs = ["10", "0", "1"], m = 1, n = 1
输出：2
解释：最大的子集是 {"0", "1"} ，所以答案是 2 。
```

### 提示：

```
1 <= strs.length <= 600
1 <= strs[i].length <= 100
strs[i] 仅由 '0' 和 '1' 组成
1 <= m, n <= 100
```

## 题解

```ts
/**
 * @description: 空间复杂度 O(mn) 时间复杂度 O(lmn + L) l: strs长度 L strs数组所有字符串的长度和
 * @return {*}
 * @param {string} strs
 * @param {number} m
 * @param {number} n
 */
export function findMaxForm(strs: string[], m: number, n: number): number {
  const len = strs.length
  const dp: number[][][] = new Array(len + 1).fill(0).map(() => new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)))
  for (let i = 1; i <= len; i++) {
    let zero = 0
    let one = 0
    for (let s = 0; s < strs[i - 1].length; s++) strs[i - 1][s] === '0' ? zero++ : one++
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        dp[i][j][k] = dp[i - 1][j][k]
        if (j >= zero && k >= one)
          dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - zero][k - one] + 1)
      }
    }
  }
  return dp[len][m][n]
}
```

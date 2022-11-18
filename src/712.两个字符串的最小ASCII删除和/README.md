# 712.两个字符串的最小ASCII删除和

> 难度：中等

## 题目

给定两个字符串s1 和 s2，返回 使两个字符串相等所需删除字符的 ASCII 值的最小和 。

### 示例

#### 示例 1:

```
输入: s1 = "sea", s2 = "eat"
输出: 231
解释: 在 "sea" 中删除 "s" 并将 "s" 的值(115)加入总和。
在 "eat" 中删除 "t" 并将 116 加入总和。
结束时，两个字符串相等，115 + 116 = 231 就是符合条件的最小和。
```

#### 示例 2:

```
输入: s1 = "delete", s2 = "leet"
输出: 403
解释: 在 "delete" 中删除 "dee" 字符串变成 "let"，
将 100[d]+101[e]+101[e] 加入总和。在 "leet" 中删除 "e" 将 101[e] 加入总和。
结束时，两个字符串都等于 "let"，结果即为 100+101+101+101 = 403 。
如果改为将两个字符串转换为 "lee" 或 "eet"，我们会得到 433 或 417 的结果，比答案更大。
```

### 提示:

```
0 <= s1.length, s2.length <= 1000
s1 和 s2 由小写英文字母组成
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N*M) 空间复杂度 O(N*M)
 * @return {*}
 * @param {string} s1
 * @param {string} s2
 */
export function minimumDeleteSum(s1: string, s2: string): number {
  const len1 = s1.length
  const len2 = s2.length
  // arr[i][j] = Math.max(...前三个值的 + 不同情况下的值)
  const arr: number[][] = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0))
  for (let i = 1; i <= len1; i++) arr[i][0] = s1[i - 1].charCodeAt(0) + arr[i - 1][0]
  for (let i = 1; i <= len2; i++) arr[0][i] = s2[i - 1].charCodeAt(0) + arr[0][i - 1]
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const c1 = s1[i - 1].charCodeAt(0)
      const c2 = s2[j - 1].charCodeAt(0)
      if (c1 === c2)
        arr[i][j] = Math.min(arr[i - 1][j - 1], arr[i - 1][j] + c1, arr[i][j - 1] + c2)
      else
        arr[i][j] = Math.min(arr[i - 1][j - 1] + c1 + c2, arr[i - 1][j] + c1, arr[i][j - 1] + c2)
    }
  }
  return arr[len1][len2]
}
```

# 214.最短回文串

> 难度：困难

## 题目

给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。

### 示例

#### 示例 1：

```
输入：s = "aacecaaa"
输出："aaacecaaa"
```

#### 示例 2：

```
输入：s = "abcd"
输出："dcbabcd"
```
 

提示：

```
0 <= s.length <= 5 * 104
s 仅由小写英文字母组成
```

## 题解

```ts
/**
 * ! KMP 算法 寻找前缀最长回文串
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function shortestPalindrome(s: string): string {
  const ns = `${s}#${s.split('').reverse().join('')}`
  const next: number[] = new Array(ns.length)
  next[0] = -1
  for (let i = 1, j = -1; ns[i]; i++) {
    while (j !== -1 && ns[j + 1] !== ns[i]) j = next[j]
    if (ns[j + 1] === ns[i]) j++
    next[i] = j
  }
  return s.slice(next[ns.length - 1] + 1).split('').reverse().join('') + s
}
```

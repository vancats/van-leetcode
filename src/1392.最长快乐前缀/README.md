# 1392.最长快乐前缀

> 难度：中等

## 题目

「快乐前缀」 是在原字符串中既是 非空 前缀也是后缀（不包括原字符串自身）的字符串。

给你一个字符串 s，请你返回它的 最长快乐前缀。如果不存在满足题意的前缀，则返回一个空字符串 "" 。

### 示例

#### 示例 1：

```
输入：s = "level"
输出："l"
解释：不包括 s 自己，一共有 4 个前缀（"l", "le", "lev", "leve"）和 4 个后缀（"l", "el", "vel", "evel"）。最长的既是前缀也是后缀的字符串是 "l" 。
```

#### 示例 2：

```
输入：s = "ababab"
输出："abab"
解释："abab" 是最长的既是前缀也是后缀的字符串。题目允许前后缀在原字符串中重叠。
```

### 提示：

```
1 <= s.length <= 105
s 只含有小写英文字母
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function longestPrefix(s: string): string {
  const n = s.length
  const next: number[] = new Array(n).fill(-1)
  for (let i = 1, j = -1; i < n; i++) {
    while (j !== -1 && s[i] !== s[j + 1]) j = next[j]
    if (s[i] === s[j + 1]) j++
    next[i] = j
  }
  return s.slice(0, next[n - 1] + 1)
}
```

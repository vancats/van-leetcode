# 424.替换后的最长重复字符

> 难度：中等

## 题目

给你一个字符串 s 和一个整数 k 。你可以选择字符串中的任一字符，并将其更改为任何其他大写英文字符。该操作最多可执行 k 次。

在执行上述操作后，返回包含相同字母的最长子字符串的长度。

### 示例

#### 示例 1：

```
输入：s = "ABAB", k = 2
输出：4
解释：用两个'A'替换为两个'B',反之亦然。
```

#### 示例 2：

```
输入：s = "AABABBA", k = 1
输出：4
解释：
将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
子串 "BBBB" 有最长重复字母, 答案为 4。
```

### 提示：

```
1 <= s.length <= 105
s 仅由大写英文字母组成
0 <= k <= s.length
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度(A) ASCII 值的范围
 * @return {*}
 * @param {string} s
 * @param {number} k
 */
export function characterReplacement(s: string, k: number): number {
  const freq: number[] = new Array(26).fill(0)
  let res = 0
  let left = 0
  let right = 0
  let maxCount = 0
  while (right < s.length) {
    const cur = getNum(s[right++])
    // 维护一个 max 值，因为 freq 保证正确，那么只需要维护当前值是否为最大即可；值只需要考虑增加，不需要考虑减少的情况
    maxCount = Math.max(maxCount, ++freq[cur])
    // 此时 k 不够，左边界右移，并且维护 freq
    if (right - left > maxCount + k)
      freq[getNum(s[left++])]--
    res = Math.max(res, right - left)
  }

  return res
}

function getNum(char: string) {
  return char.charCodeAt(0) - 65
}
```

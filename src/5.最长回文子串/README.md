# 5.最长回文子串

> 难度：中等

## 题目

给你一个字符串 s，找到 s 中最长的回文子串。

### 示例

#### 示例 1：

```
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
```

#### 示例 2：

```
输入：s = "cbbd"
输出："bb"
```

### 提示：

```
1 <= s.length <= 1000
s 仅由数字和英文字母组成
```

## 题解

```ts
/**
 * ! 马拉车算法
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function longestPalindrome(s: string): string {
  const ns = getNewString(s) /// 获取有 # 的新字符串
  const d: number[] = new Array(ns.length).fill(0) /// 存放每个值的最大距离

  let l = 0 /// 能覆盖到最远位置的左侧
  let r = -1 /// 能覆盖到最远位置的右侧
  for (let i = 0; ns[i]; i++) {
    /// 如果该值没有被覆盖到
    if (i > r)
      d[i] = 1

    /// 如果被覆盖到了，那么取 该值对称点的 d 值与该值到边界值的小值
    else
      d[i] = Math.min(r - i, d[l + r - i])

    /// 朴素的回文算法，继续查看两边是否回文
    while (i - d[i] >= 0 && ns[i - d[i]] === ns[i + d[i]]) d[i]++

    /// 更新 l 和 r 值
    if (i - d[i] > 0 && i + d[i] > r) {
      l = i - d[i]
      r = i + d[i]
    }
  }

  let str = ''
  let tmp = -1
  for (let i = 0; ns[i]; i++) {
    if (tmp >= d[i]) continue
    tmp = d[i]
    str = ''
    for (let j = i - d[i] + 1; j < i + d[i]; j++) {
      if (ns[j] === '#') continue
      str += ns[j]
    }
  }
  return str
}

function getNewString(s: string): string {
  let ns = '#'
  for (let i = 0; s[i]; i++) {
    ns += s[i]
    ns += '#'
  }
  return ns
}
```

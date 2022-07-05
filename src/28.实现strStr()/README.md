# 28.实现strStr()

> 难度：中等

## 题目

实现 strStr() 函数。

给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

说明：

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。

### 示例

#### 示例 1：

```
输入：haystack = "hello", needle = "ll"
输出：2
```

#### 示例 2：

```
输入：haystack = "aaaaa", needle = "bba"
输出：-1
```

### 提示：

```
1 <= haystack.length, needle.length <= 104
haystack 和 needle 仅由小写英文字符组成
```

## 题解

```ts
/**
 * ! Sunday 算法 寻找当时后一位的对应位置
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} haystack
 * @param {string} needle
 */
export function strStr(haystack: string, needle: string): number {
  const map: Map<string, number> = new Map()
  for (let i = 0; i < needle.length; i++)
    map.set(needle[i], i)

  let i = 0
  while (i + needle.length <= haystack.length) {
    let flag = true
    for (let j = 0; needle[j]; j++) {
      if (needle[j] === haystack[i + j]) continue
      flag = false
      break
    }
    if (flag) return i
    i += (needle.length - (map.get(haystack[i + needle.length]) || 0))
  }
  return -1
}
```

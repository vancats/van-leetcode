# 395.至少有K个重复字符的最长子串

> 难度：中等
>
> https://leetcode.cn/problems/longest-substring-with-at-least-k-repeating-characters/

## 题目

给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。

### 示例

#### 示例 1：

```
输入：s = "aaabb", k = 3
输出：3
解释：最长子串为 "aaa" ，其中 'a' 重复了 3 次。
```

#### 示例 2：

```
输入：s = "ababbc", k = 2
输出：5
解释：最长子串为 "ababb" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。
```

### 提示：

```
1 <= s.length <= 104
s 仅由小写英文字母组成
1 <= k <= 105
```

## 题解

```ts
/**
 * @description: 待定
 * @return {*}
 * @param {string} s
 * @param {number} k
 */
export function longestSubstring(s: string, k: number): number {
  // 收集每个字符出现的次数
  const map: Map<string, number> = new Map()
  for (let i = 0; i < s.length; i++)
    map.set(s[i], (map.get(s[i]) || 0) + 1)

  // 扫描整个字符串，收集每个不符合条件字符的下标
  const lackArr: number[] = []
  for (let i = 0; i < s.length; i++)
    if (map.get(s[i])! < k) lackArr.push(i)

  // 代码标记，增加结尾点
  lackArr.push(s.length)
  if (lackArr.length === 1) return s.length

  let max = 0
  let prev = 0
  lackArr.forEach(item => {
    // 准备检查的字符串的长度
    const len = item - prev
    // 如果长度小于 k，没有必要递归
    if (len >= k)
      // 递归处理子串
      max = Math.max(max, longestSubstring(s.slice(prev, prev + len), k))

    // 要走到下一个位置
    prev = item + 1
  })
  return max
}
```

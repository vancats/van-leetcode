# 1081.不同字符的最小子序列

> 难度：中等
>
> https://leetcode.cn/problems/smallest-subsequence-of-distinct-characters/

## 题目

回 s 字典序最小的子序列，该子序列包含 s 的所有不同字符，且只包含一次。

注意：该题与 316 https://leetcode.com/problems/remove-duplicate-letters/ 相同

### 示例

#### 示例 1：

```
输入：s = "bcabc"
输出："abc"
```

#### 示例 2：

```
输入：s = "cbacdcbc"
输出："acdb"
```

### 提示：

```
1 <= s.length <= 1000
s 由小写英文字母组成
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function smallestSubsequence(s: string): string {
  const map: Map<string, number> = new Map()
  const stack: string[] = []
  // 首先初始化获得所有值
  for (let i = 0; i < s.length; i++)
    map.set(s[i], (map.get(s[i]) || 0) + 1)

  for (let i = 0; i < s.length; i++) {
    // 如果序列中已经存在的话，就没必要入栈了
    if (stack.includes(s[i])) {
      map.set(s[i], map.get(s[i])! - 1)
      continue
    }
    // 如果栈不为空，栈末尾值大于当前值并且后续还有栈末尾值
    while (stack.length
      && stack[stack.length - 1] >= s[i]
      && map.get(stack[stack.length - 1])! > 1
    ) {
      const val = stack.pop()!
      map.set(val, map.get(val)! - 1)
    }
    stack.push(s[i])
  }
  return stack.join('')
}
```

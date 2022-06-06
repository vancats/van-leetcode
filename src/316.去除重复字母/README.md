# 316.去除重复字母

> 难度：中等
>
> https://leetcode.cn/problems/remove-duplicate-letters/

## 题目

给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

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
1 <= s.length <= 104
s 由小写英文字母组成

注意：该题与 1081 https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters 相同
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function removeDuplicateLetters(s: string): string {
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

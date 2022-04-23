# 91.解码方法

> 难度：中等
>
> https://leetcode-cn.com/problems/decode-ways/

## 题目

一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，"11106" 可以映射为：

"AAJF" ，将消息分组为 (1 1 10 6)
"KJF" ，将消息分组为 (11 10 6)
注意，消息不能分组为  (1 11 06) ，因为 "06" 不能映射为 "F" ，这是由于 "6" 和 "06" 在映射中并不等价。

给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。

题目数据保证答案肯定是一个 32 位 的整数。

### 示例

#### 示例 1：

```
输入：s = "12"
输出：2
解释：它可以解码为 "AB"（1 2）或者 "L"（12）。
```

#### 示例 2：

```
输入：s = "226"
输出：3
解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
```

#### 示例 3：

```
输入：s = "0"
输出：0
解释：没有字符映射到以 0 开头的数字。
含有 0 的有效映射是 'J' -> "10" 和 'T'-> "20" 。
由于没有字符，因此没有有效的方法对此进行解码，因为所有数字都需要映射。
```

### 提示：

```
1 <= s.length <= 100
s 只包含数字，并且可能包含前导零。
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function numDecodings(s: string): number {
  const arr = new Array(s.length + 1).fill(0)
  arr[0] = 1
  for (let i = 1; i <= s.length; i++) {
    // 如果当前不是 0，那么值等于上一个值
    if (s[i - 1] !== '0')
      arr[i] += arr[i - 1]
    if (i > 1 && s[i - 2] !== '0' && (Number(s[i - 2]) * 10 + Number(s[i - 1]) < 27))
      // 如果上一个值不是 0 并且两个数字合并小于等于 26，再加一种可能
      arr[i] += arr[i - 2]
  }
  return arr[s.length]
}

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} s
 */
export function numDecodings1(s: string): number {
  let a = 0; let b = 1; let c = 0
  for (let i = 0; i <= s.length; i++) {
    c = 0
    // 如果当前不是 0，那么值等于上一个值
    if (s[i] !== '0')
      c = b
    if (i >= 1 && s[i - 1] !== '0' && (Number(s[i - 1]) * 10 + Number(s[i]) < 27))
      // 如果上一个值不是 0 并且两个数字合并小于等于 26，再加一种可能
      c += a
    // 更新值
    a = b
    b = c
  }
  return c
}
```

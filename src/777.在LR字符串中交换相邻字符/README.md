# 777.在LR字符串中交换相邻字符

> 难度：中等

## 题目

在一个由 'L' , 'R' 和 'X' 三个字符组成的字符串（例如"RXXLRXRXL"）中进行移动操作。一次移动操作指用一个"LX"替换一个"XL"，或者用一个"XR"替换一个"RX"。现给定起始字符串start和结束字符串end，请编写代码，当且仅当存在一系列移动操作使得start可以转换成end时， 返回True。

### 示例

```
输入: start = "RXXLRXRXL", end = "XRLXXRRLX"
输出: True
解释:
我们可以通过以下几步将start转换成end:
RXXLRXRXL ->
XRXLRXRXL ->
XRLXRXRXL ->
XRLXXRRXL ->
XRLXXRRLX
```

### 提示：

```
1 <= len(start) = len(end) <= 10000。
start和end中的字符串仅限于'L', 'R'和'X'。
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} start
 * @param {string} end
 */
export function canTransform(start: string, end: string): boolean {
  const n = start.length
  // 双指针
  let i = 0
  let j = 0
  while (i < n && j < n) {
    // 找到第一个不为 X 的值
    while (start[i] === 'X') i++
    while (end[j] === 'X') j++
    if (i < n && j < n) {
      // 如果两值不等，直接 false
      if (start[i] !== end[j]) return false
      // 如果是 L，但是 i 值小于 j，那么无法移动到相应位置，R 同理
      if ((start[i] === 'L' && i < j) || (start[i] === 'R' && i > j)) return false
      i++
      j++
    }
  }
  // 如果 j 已经到末尾，查看 i 后的元素是否都为 X
  if (i < n)
    if (start.slice(i) !== 'X'.repeat(n - i)) return false

  if (j < n)
    if (end.slice(j) !== 'X'.repeat(n - j)) return false

  return true
}
```

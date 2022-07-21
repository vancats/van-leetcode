# 29.两数相除

> 难度：中等

## 题目

给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

返回被除数 dividend 除以除数 divisor 得到的商。

整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2

### 示例

#### 示例 1:

```
输入: dividend = 10, divisor = 3
输出: 3
解释: 10/3 = truncate(3.33333..) = truncate(3) = 3
```

#### 示例 2:

```
输入: dividend = 7, divisor = -3
输出: -2
解释: 7/-3 = truncate(-2.33333..) = -2
```

### 提示：

```
被除数和除数均为 32 位有符号整数。
除数不为 0。
假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(lgN) 空间复杂度 O(lgN)
 * @return {*}
 * @param {number} dividend
 * @param {number} divisor
 */
export function divide(dividend: number, divisor: number): number {
  const max = Math.pow(2, 31) - 1
  const min = -Math.pow(2, 31)
  let flag = true
  if (dividend < 0) {
    flag = !flag
    dividend = -dividend
  }
  if (divisor < 0) {
    flag = !flag
    divisor = -divisor
  }
  if (dividend < divisor) return 0

  const res: number[] = [divisor]
  let cnt = 1; let cur = divisor; let isMax = false
  while (cur < dividend) {
    while (res.length && res[res.length - 1] + cur > dividend) {
      res.pop()
      isMax = true
    }
    if (!res.length) break
    cur += res[res.length - 1]
    cnt += Math.pow(2, res.length - 1)
    if (!isMax) res.push(cur)
  }
  if (flag) return cnt > max ? max : cnt
  return -cnt < min ? min : -cnt
}
```

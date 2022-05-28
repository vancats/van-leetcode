# 907.子数组的最小值之和

> 难度：中等
>
> https://leetcode.cn/problems/sum-of-subarray-minimums/

## 题目

给定一个整数数组 arr，找到 min(b) 的总和，其中 b 的范围为 arr 的每个（连续）子数组。

由于答案可能很大，因此 返回答案模 10^9 + 7 。

### 示例

#### 示例 1：

```
输入：arr = [3,1,2,4]
输出：17
解释：
子数组为 [3]，[1]，[2]，[4]，[3,1]，[1,2]，[2,4]，[3,1,2]，[1,2,4]，[3,1,2,4]。
最小值为 3，1，2，4，1，1，2，1，1，1，和为 17。
```

#### 示例 2：

```
输入：arr = [11,81,94,43,3]
输出：444
```

### 提示：

```
1 <= arr.length <= 3 * 104
1 <= arr[i] <= 3 * 104
```

## 题解

```ts
/**
 * @description: Annotation
 * @return {*}
 * @param {number} arr
 */
export function sumSubarrayMins(arr: number[]): number {
  const n = arr.length
  const mod = 1e9 + 7
  const stack: number[] = []
  // 存储的是当前单调栈元素的最小值和
  const sum: number[] = new Array(n + 1).fill(0)
  let res = 0
  for (let i = 0; i < n; i++) {
    // 正常单调栈操作
    while (stack.length && arr[i] <= arr[stack[stack.length - 1]])
      stack.pop()
    // 取出最近小于当前值的值
    const ind = stack.length ? stack[stack.length - 1] : -1
    stack.push(i)
    // 【1, 2, 7, 6, 5】 => [1, 2, 5]
    // !RMQ(x,y) 固定 y
    // !推入当前值后，增加的总和为：
    // !  栈中上一个值(2)与它之前值的和[1,2] + 当前值(5) 与中间所有值[7,6,5]的和值
    sum[stack.length] = (sum[stack.length - 1] + arr[i] * (i - ind)) % mod
    console.log(sum)
    res = (sum[stack.length] + res) % mod
  }
  return res
}
```

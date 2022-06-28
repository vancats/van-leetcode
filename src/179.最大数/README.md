# 179.最大数

> 难度：简单

## 题目

给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。

### 示例

#### 示例 1：

```
输入：nums = [10,2]
输出："210"
```

#### 示例 2：

```
输入：nums = [3,30,34,5,9]
输出："9534330"
```

### 提示：

```
1 <= nums.length <= 100
0 <= nums[i] <= 109
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 */
export function largestNumber(nums: number[]): string {
  nums.sort((a, b) => {
    const s1 = String(a)
    const s2 = String(b)
    return Number(s2 + s1) - Number(s1 + s2)
  })
  return nums[0] ? nums.join('') : '0'
}
```

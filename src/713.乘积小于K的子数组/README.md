# 713.乘积小于K的子数组

> 难度：中等
>
> https://leetcode-cn.com/problems/subarray-product-less-than-k/

## 题目

给你一个整数数组 nums 和一个整数 k ，请你返回子数组内所有元素的乘积严格小于 k 的连续子数组的数目。

### 示例

#### 示例 1：

```
输入：nums = [10,5,2,6], k = 100
输出：8
解释：8 个乘积小于 100 的子数组分别为：[10]、[5]、[2],、[6]、[10,5]、[5,2]、[2,6]、[5,2,6]。
需要注意的是 [10,5,2] 并不是乘积小于 100 的子数组。
```

#### 示例 2：

```
输入：nums = [1,2,3], k = 0
输出：0
```

### 提示: 

```
1 <= nums.length <= 3 * 104
1 <= nums[i] <= 1000
0 <= k <= 106
```

## 题解

```ts
/**
 * @description: 滑动窗口 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 * @param {number} k
 */
export function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let cnt = 0
  let cur = 1
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    cur *= nums[i]
    while (j <= i && cur >= k) {
      cur /= nums[j]
      j++
    }
    // i - j 是新加元素和前面数组的数目，1 是新加元素本身
    cnt += i - j + 1
  }
  return cnt
}
```

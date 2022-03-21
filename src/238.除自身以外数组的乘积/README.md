# 238.除自身以外数组的乘积

> 难度：中等
>
> https://leetcode-cn.com/problems/product-of-array-except-self/

## 题目

给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

请不要使用除法，且在 O(n) 时间复杂度内完成此题。

### 示例

#### 示例 1:

```
输入: nums = [1,2,3,4]
输出: [24,12,8,6]
```

#### 示例 2:

```
输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]
```

### 提示：

```
2 <= nums.length <= 105
-30 <= nums[i] <= 30
保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内
```

## 题解

```typescript
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1) 不计算输出数组
 * @return {*}
 * @param {number} nums
 */
function productExceptSelf(nums: number[]): number[] {
  let n = nums.length
  let nums1: number[] = new Array(n)
  nums1[0] = 1
  for (let i = 1; i < n; i++) {
    nums1[i] = nums1[i - 1] * nums[i - 1]
  }
  let sum = nums[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    nums1[i] *= sum
    sum *= nums[i]
  }
  return nums1
}
```
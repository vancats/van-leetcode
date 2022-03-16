# 912.排序数组

> 难度：中等
>
> https://leetcode-cn.com/problems/sort-an-array/

## 题目

给你一个整数数组 nums，请你将该数组升序排列。

### 示例

#### 示例 1：

```
输入：nums = [5,2,3,1]
输出：[1,2,3,5]
```

#### 示例 2：

```
输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5]
```

### 提示：

```
1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104
```

## 题解

```typescript
/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(h) h 是调用栈的深度
 * @return {*}
 * @param {number} nums
 */
export function sortArray(nums: number[]): number[] {
  sortQuick(nums, 0, nums.length - 1)
  return nums
}

function sortQuick(nums: number[], left: number, right: number) {
  const index = partition(nums, left, right)
  if (left < index - 1) {
    sortQuick(nums, left, index - 1)
  }
  if (index < right) {
    sortQuick(nums, index, right)
  }
}


function partition(nums: number[], left: number, right: number): number {
  let i = left, j = right, pivotValue = nums[Math.floor(left + (right - left) / 2)]
  while (i <= j) {
    while (nums[i] < pivotValue) i++
    while (nums[j] > pivotValue) j--
    if (i <= j) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      i++
      j--
    }
  }
  return i
}

```
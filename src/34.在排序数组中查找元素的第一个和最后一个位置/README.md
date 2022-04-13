# 34.在排序数组中查找元素的第一个和最后一个位置

> 难度：中等
>
> https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/

## 题目

给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

### 示例

#### 示例 1：

```
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```

#### 示例 2：

```
输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
```

#### 示例 3：

```
输入：nums = [], target = 0
输出：[-1,-1]
```

### 提示：

```
0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums 是一个非递减数组
-109 <= target <= 109
```

### 进阶：

> 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？

## 题解

```typescript
/**
 * @description: 时间复杂度 O(lgN) O(1)
 * @return {*}
 * @param {number} nums
 * @param {number} target
 */
export function searchRange(nums: number[], target: number): number[] {
  const left = binarySearch(nums, target, 0, nums.length - 1)
  if (nums[left] !== target)
    return [-1, -1]
  const right = binarySearch(nums, target + 1, 0, nums.length - 1)
  return [left, right - 1]
}

function binarySearch(nums: number[], target: number, left: number, right: number): number {
  while (right - left > 3) {
    const mid = (left + right) >> 1
    if (nums[mid] >= target)
      right = mid
    else left = mid + 1
  }
  for (let i = left; i <= right; i++) {
    if (nums[i] >= target)
      return i
  }

  return nums.length
}
```

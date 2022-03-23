# 327.区间和的个数

> 难度：困难
>
> https://leetcode-cn.com/problems/count-of-range-sum/

## 题目

给你一个整数数组 `nums` 以及两个整数 `lower` 和 `upper` 。求数组中，值位于范围 `[lower, upper]` （包含 `lower` 和 `upper`）之内的 区间和的个数 。

区间和 `S(i, j)` 表示在 `nums` 中，位置从 `i` 到 `j` 的元素之和，包含 `i` 和 `j` `(i ≤ j)`。

### 示例 

#### 示例 1：

```
输入：nums = [-2,5,-1], lower = -2, upper = 2
输出：3
解释：存在三个区间：[0,0]、[2,2] 和 [0,2] ，对应的区间和分别是：-2 、-1 、2 。
```

#### 示例 2：

```
输入：nums = [0], lower = 0, upper = 0
输出：1
```

### 提示：

```
1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
-105 <= lower <= upper <= 105
题目数据保证答案是一个 32 位 的整数
```

## 题解

```typescript
/**
 * @description: 空间复杂度 O(N) 时间复杂度 O(NlgN)
 * @return {*}
 * @param {number} nums
 * @param {number} lower
 * @param {number} upper
 */
export function countRangeSum(nums: number[], lower: number, upper: number): number {
  let n = nums.length
  let preArr: number[] = new Array(n + 1).fill(0)
  // 前缀和
  for (let i = 0; i < n; i++) {
    preArr[i + 1] = nums[i] + preArr[i]
  }
  return mergeSort(preArr, 0, preArr.length - 1, lower, upper)
}

function mergeSort(nums: number[], left: number, right: number, lower: number, upper: number): number {
  // 正常归并操作
  if (left >= right) return 0
  let mid = left + ((right - left) >> 1), res = 0
  res += mergeSort(nums, left, mid, lower, upper)
  res += mergeSort(nums, mid + 1, right, lower, upper)

  // 额外操作，计算左右两边符合区间和的个数
  res += countTwoPart(nums, left, mid, mid + 1, right, lower, upper)

  // 正常归并排序操作
  let i = left, k = left, j = mid + 1, temp: number[] = []
  while (i <= mid || j <= right) {
    if ((j > right) || (i <= mid && nums[i] <= nums[j])) {
      temp[k++] = nums[i++]
    } else {
      temp[k++] = nums[j++]
    }
  }

  for (let i = left; i <= right; i++) nums[i] = temp[i]
  return res
}

function countTwoPart(nums: number[], ls: number, le: number, rs: number, re: number, lower: number, upper: number): number {
  let ans = 0, k1 = ls, k2 = ls
  for (let j = rs; j <= re; j++) {
    // 计算 nums[i] 的左右边界
    let a = nums[j] - upper
    let b = nums[j] - lower
    // 移动两个指针到两个边界上
    while (k1 <= le && nums[k1] < a) k1++
    while (k2 <= le && nums[k2] <= b) k2++
    ans += k2 - k1
  }
  return ans
}
```
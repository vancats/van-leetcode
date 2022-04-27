# 905.按奇偶排序数组

> 难度：非常简单
>
> https://leetcode-cn.com/problems/sort-array-by-parity/

## 题目

给你一个整数数组 nums，将 nums 中的的所有偶数元素移动到数组的前面，后跟所有奇数元素。

返回满足此条件的 任一数组 作为答案。

### 示例

#### 示例 1：

```
输入：nums = [3,1,2,4]
输出：[2,4,3,1]
解释：[4,2,3,1]、[2,4,1,3] 和 [4,2,1,3] 也会被视作正确答案。
```

#### 示例 2：

```
输入：nums = [0]
输出：[0]
```

### 提示：

```
1 <= nums.length <= 5000
0 <= nums[i] <= 5000
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 */
export function sortArrayByParity(nums: number[]): number[] {
  let slow = 0
  let fast = 0
  while (fast < nums.length) {
    if (nums[fast] % 2 === 0) {
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]]
      slow++
    }
    fast++
  }
  return nums
}
```

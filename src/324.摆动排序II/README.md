# 324.摆动排序II

> 难度：中等

## 题目

给你一个整数数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。

你可以假设所有输入数组都可以得到满足题目要求的结果。

 

示例 1：

输入：nums = [1,5,1,1,6,4]
输出：[1,6,1,5,1,4]
解释：[1,4,1,5,1,6] 同样是符合题目要求的结果，可以被判题程序接受。
示例 2：

输入：nums = [1,3,2,2,3,1]
输出：[2,3,1,3,1,2]
 

提示：

1 <= nums.length <= 5 * 104
0 <= nums[i] <= 5000
题目数据保证，对于给定的输入 nums ，总能产生满足题目要求的结果
 

进阶：你能用 O(n) 时间复杂度和 / 或原地 O(1) 额外空间来实现吗？

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/wiggle-sort-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。给你一个整数数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。

你可以假设所有输入数组都可以得到满足题目要求的结果。

### 示例

#### 示例 1：

```
输入：nums = [1,5,1,1,6,4]
输出：[1,6,1,5,1,4]
解释：[1,4,1,5,1,6] 同样是符合题目要求的结果，可以被判题程序接受。
```

#### 示例 2：

```
输入：nums = [1,3,2,2,3,1]
输出：[2,3,1,3,1,2]
```

### 提示：

```
1 <= nums.length <= 5 * 104
0 <= nums[i] <= 5000
题目数据保证，对于给定的输入 nums ，总能产生满足题目要求的结果
```

> 进阶：你能用 O(n) 时间复杂度和 / 或原地 O(1) 额外空间来实现吗？

## 题解

```ts
/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 */
export function wiggleSort(nums: number[]): void {
  const n = nums.length
  nums.sort((a, b) => a - b)
  const arr = nums.slice()
  let j = ((n + 1) >> 1) - 1
  for (let i = 0, k = n - 1; i < n; i += 2, k--, j--) {
    nums[i] = arr[j]
    if (i + 1 < n) nums[i + 1] = arr[k]
  }
}
```

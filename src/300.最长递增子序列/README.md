# 300.最长递增子序列

> 难度：中等
>
> https://leetcode-cn.com/problems/longest-increasing-subsequence/

## 题目

给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。


### 示例

#### 示例 1：

```
输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
```

#### 示例 2：

```
输入：nums = [0,1,0,3,2,3]
输出：4
```

#### 示例 3：

```
输入：nums = [7,7,7,7,7,7,7]
输出：1
```

### 提示：

```
1 <= nums.length <= 2500
-104 <= nums[i] <= 104
```

### 进阶：

> 你能将算法的时间复杂度降低到 O(n log(n)) 吗?


## 题解

```typescript
/**
 * @Author: Lqf
 * @description: 时间复杂度 O(NlogN) 空间复杂度 O(N)
 * @return number
 * @param {number} nums
 */
export function lengthOfLIS(nums: number[]): number {
  if (!nums.length) return 0
  const res: number[] = [nums[0]]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > res[res.length - 1]) {
      // 如果比末尾值大，直接 push
      res.push(nums[i])
    } else if (nums[i] < res[res.length - 1]) {
      // 如果比末尾值小，替换其中比该数大的最小值
      // 二分查找缩短搜索速度
      let left = 0, right = res.length - 1
      while (left < right) {
        let mid = (left + right) >> 1
        if (res[mid] >= nums[i]) {
          right = mid
        } else {
          left = mid + 1
        }
      }
      res[left] = nums[i]
    }
  }
  return res.length
}
```

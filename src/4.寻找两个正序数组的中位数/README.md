# 4.寻找两个正序数组的中位数

> 难度：困难
>
> https://leetcode-cn.com/problems/median-of-two-sorted-arrays/

## 题目

给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

算法的时间复杂度应该为 O(log (m+n)) 。

### 示例

#### 示例 1：

```
输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
```

#### 示例 2：

```
输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
```

### 提示：

```
nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
```

## 题解

```typescript
/**
 * @description: 时间复杂度 O(lg(M+N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums1
 * @param {number} nums2
 */
export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const len1 = nums1.length; const len2 = nums2.length
  // 中位数需要取大值
  const k = Math.ceil((len1 + len2) / 2)
  // 获取中位数的值
  const left = findKthNum(nums1, nums2, k)
  // 如果总数是奇数，则直接返回
  if ((len1 + len2) % 2)
    return left

  // 如果不是奇数，则需要求出该值的下一位，k + 1
  const right = findKthNum(nums1, nums2, k + 1)
  // 取两个值的平均数
  return (left + right) / 2
}

// 寻找第 k 个值
function findKthNum(nums1: number[], nums2: number[], k: number): number {
  // 如果有一个数组已经空了，那么直接取另一个数组的相应的值
  if (!nums1.length)
    return nums2[k - 1]
  if (!nums2.length)
    return nums1[k - 1]

  // 如果只取第一位，那么对比数组的头个元素即可
  if (k === 1)
    return Math.min(nums1[0], nums2[0])
  // 取中点，但是要注意，k 代表第几个数，在数组中需要减一
  let cur = (k >> 1) - 1
  // 这里是为了防止 cur 值大于数组长度
  if (cur >= nums1.length)
    cur = nums1.length - 1
  if (cur >= nums2.length)
    cur = nums2.length - 1
  if (nums1[cur] < nums2[cur]) {
    // 舍弃 nums1 的前 cur 部分，k 减去相应值
    return findKthNum(nums1.slice(cur + 1), nums2, k - cur - 1)
  }
  else {
    // 同理
    return findKthNum(nums1, nums2.slice(cur + 1), k - cur - 1)
  }
}
```

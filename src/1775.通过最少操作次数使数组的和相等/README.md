# 1775.通过最少操作次数使数组的和相等

> 难度：中等

## 题目

给你两个长度可能不等的整数数组 nums1 和 nums2 。两个数组中的所有值都在 1 到 6 之间（包含 1 和 6）。

每次操作中，你可以选择 任意 数组中的任意一个整数，将它变成 1 到 6 之间 任意 的值（包含 1 和 6）。

请你返回使 nums1 中所有数的和与 nums2 中所有数的和相等的最少操作次数。如果无法使两个数组的和相等，请返回 -1 。

### 示例

#### 示例 1：

```
输入：nums1 = [1,2,3,4,5,6], nums2 = [1,1,2,2,2,2]
输出：3
解释：你可以通过 3 次操作使 nums1 中所有数的和与 nums2 中所有数的和相等。以下数组下标都从 0 开始。
- 将 nums2[0] 变为 6 。 nums1 = [1,2,3,4,5,6], nums2 = [6,1,2,2,2,2] 。
- 将 nums1[5] 变为 1 。 nums1 = [1,2,3,4,5,1], nums2 = [6,1,2,2,2,2] 。
- 将 nums1[2] 变为 2 。 nums1 = [1,2,2,4,5,1], nums2 = [6,1,2,2,2,2] 。
```

#### 示例 2：

```
输入：nums1 = [1,1,1,1,1,1,1], nums2 = [6]
输出：-1
解释：没有办法减少 nums1 的和或者增加 nums2 的和使二者相等。
```

#### 示例 3：

```
输入：nums1 = [6,6], nums2 = [1]
输出：3
解释：你可以通过 3 次操作使 nums1 中所有数的和与 nums2 中所有数的和相等。以下数组下标都从 0 开始。
- 将 nums1[0] 变为 2 。 nums1 = [2,6], nums2 = [1] 。
- 将 nums1[1] 变为 2 。 nums1 = [2,2], nums2 = [1] 。
- 将 nums2[0] 变为 4 。 nums1 = [2,2], nums2 = [4] 。
```

### 提示：

```
1 <= nums1.length, nums2.length <= 105
1 <= nums1[i], nums2[i] <= 6
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums1
 * @param {number} nums2
 */
export function minOperations(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length * 6 || nums2.length > nums1.length * 6) return -1
  const sum1 = nums1.reduce((p, v) => p + v, 0)
  const sum2 = nums2.reduce((p, v) => p + v, 0)
  if (sum1 < sum2)
    [nums1, nums2] = [nums2, nums1]

  let minus = Math.abs(sum1 - sum2)
  const rest = nums2.map(num => 6 - num).concat(nums1.map(num => num - 1)).sort((a, b) => a - b)
  let cnt = 0
  while (minus > 0) {
    minus -= rest.pop()!
    cnt++
  }
  return cnt
}
```

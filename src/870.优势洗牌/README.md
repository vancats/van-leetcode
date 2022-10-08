# 870.优势洗牌

> 难度：中等

## 题目

给定两个大小相等的数组 nums1 和 nums2，nums1 相对于 nums 的优势可以用满足 nums1[i] > nums2[i] 的索引 i 的数目来描述。

返回 nums1 的任意排列，使其相对于 nums2 的优势最大化。

### 示例

#### 示例 1：

```
输入：nums1 = [2,7,11,15], nums2 = [1,10,4,11]
输出：[2,11,7,15]
```

#### 示例 2：

```
输入：nums1 = [12,24,8,32], nums2 = [13,25,32,11]
输出：[24,32,8,12]
```

### 提示：

```
1 <= nums1.length <= 105
nums2.length == nums1.length
0 <= nums1[i], nums2[i] <= 109
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums1
 * @param {number} nums2
 */
export function advantageCount(nums1: number[], nums2: number[]): number[] {
  const n = nums1.length
  nums1.sort((a, b) => a - b)
  const arr = new Array(n)
  nums2.forEach((item, index) => {
    const ind = findIndex(nums1, item, 0, nums1.length - 1)
    if (ind !== -1) {
      arr[index] = nums1[ind]
      nums1.splice(ind, 1)
    }
  })
  if (nums1.length) {
    for (let i = 0; i < n; i++) {
      if (!arr[i])
        arr[i] = nums1.pop()
    }
  }
  return arr
}

function findIndex(arr: number[], num: number, left: number, right: number): number {
  while (left <= right) {
    const mid = (left + right) >> 1
    if (arr[mid] > num)
      right = mid - 1

    else
      left = mid + 1
  }
  return left
}
```

# 剑指Offer51.数组中的逆序对

> 难度：困难
>
> https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/

## 题目

在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

### 示例

```
输入: [7,5,6,4]
输出: 5 
```

### 提示：

```
限制：
0 <= 数组长度 <= 50000
```

## 题解

```typescript
/**
 * @description:时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 */
export function reversePairs(nums: number[]): number {
  return mergeSort(nums, 0, nums.length - 1)
}

function mergeSort(nums: number[], left: number, right: number): number {
  if (left >= right) return 0
  let ans = 0, mid = (left + right) >> 1
  ans += mergeSort(nums, left, mid)
  ans += mergeSort(nums, mid + 1, right)
  let i = left, j = mid + 1, k = left, temp: number[] = []
  while (i <= mid || j <= right) {
    if ((j > right) || (i <= mid && nums[i] <= nums[j])) {
      temp[k++] = nums[i++]
    } else {
      temp[k++] = nums[j++]
      ans += (mid - i + 1)
    }
  }
  for (let i = left; i <= right; i++) nums[i] = temp[i]
  return ans
}
```
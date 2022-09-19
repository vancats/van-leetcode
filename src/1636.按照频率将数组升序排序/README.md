# 1636.按照频率将数组升序排序

> 难度：非常简单

## 题目给你一个整数数组 nums ，请你将数组按照每个值的频率 升序 排序。如果有多个值的频率相同，请你按照数值本身将它们 降序 排序。 

请你返回排序后的数组。

### 示例

#### 示例 1：

```
输入：nums = [1,1,2,2,2,3]
输出：[3,1,1,2,2,2]
解释：'3' 频率为 1，'1' 频率为 2，'2' 频率为 3 。
```

#### 示例 2：

```
输入：nums = [2,3,1,3,2]
输出：[1,3,3,2,2]
解释：'2' 和 '3' 频率都为 2 ，所以它们之间按照数值本身降序排序。
```

#### 示例 3：

```
输入：nums = [-1,1,-6,4,5,-6,1,4,1]
输出：[5,-1,4,4,-6,-6,1,1,1]
```

### 提示：

```
1 <= nums.length <= 100
-100 <= nums[i] <= 100
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N^2)
 * @return {*}
 * @param {number} nums
 */
export function frequencySort(nums: number[]): number[] {
  const arr: number[][] = []
  for (let i = 0; i < nums.length; i++) {
    const index = arr.findIndex(item => item[0] === nums[i])
    if (index > -1)
      arr[index][1]++

    else
      arr.push([nums[i], 1])
  }
  arr.sort((a, b) => {
    if (a[1] === b[1]) return b[0] - a[0]
    return a[1] - b[1]
  })
  const res: number[] = []
  arr.forEach(item => {
    for (let i = 0; i < item[1]; i++)
      res.push(item[0])
  })
  return res
}
```

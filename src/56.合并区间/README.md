# 56.合并区间

> 难度：中等
>
> https://leetcode-cn.com/problems/merge-intervals/

## 题目

以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

 

#### 示例 1：

```
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```

#### 示例 2：

```
输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
```

### 提示：

```
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
```

## 题解

```typescript
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N) // 取决于 sort
 * @return {*}
 * @param {number} intervals
 */
export function merge(intervals: number[][]): number[][] {
  let res: number[][] = []
  let arr: number[][] = []

  // [[1,3], [2,6]] => [[1, 1], [3, -1], [2, 1], [6, -1]]
  for (let i = 0; i < intervals.length; i++) {
    arr.push([intervals[i][0], 1])
    arr.push([intervals[i][1], -1])
  }

  // [[1, 1], [3, -1], [3, 1], [2, -1]] => [[1, 1], [2, -1], [3, 1], [3, -1]]
  arr.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1]
    return a[0] - b[0]
  })

  // 前缀和，这一段的加值等于 0 时，则区间闭合
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] > 0) {
      let temp = arr[i][0]
      sum += arr[i][1]
      while (sum > 0) {
        i++
        sum += arr[i][1]
      }
      res.push([temp, arr[i][0]])
    }
  }
  return res
}
```
# 1288.删除被覆盖区间

> 难度：中等
>
> https://leetcode-cn.com/problems/remove-covered-intervals/

## 题目

给你一个区间列表，请你删除列表中被其他区间所覆盖的区间。

只有当 c <= a 且 b <= d 时，我们才认为区间 [a,b) 被区间 [c,d) 覆盖。

在完成所有删除操作后，请你返回列表中剩余区间的数目。

### 示例：

```
输入：intervals = [[1,4],[3,6],[2,8]]
输出：2
解释：区间 [3,6] 被区间 [2,8] 覆盖，所以它被删除了。
```

### 提示：​​​​​​

```
1 <= intervals.length <= 1000
0 <= intervals[i][0] < intervals[i][1] <= 10^5
对于所有的 i != j：intervals[i] != intervals[j]
```

## 题解

```typescript
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} intervals
 */
export function removeCoveredIntervals(intervals: number[][]): number {
  // 数值按从小到大，相同时从大到小排序。此时当前坐标的右端点比前面最大值小，则可得左右端点都比前面的小，可以直接删除
  intervals.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1]
    return a[0] - b[0]
  })
  let maxValue = -1, num = 0
  intervals.forEach(item => {
    if (maxValue >= item[1]) {
      num++
    } else {
      maxValue = item[1]
    }
  })
  return intervals.length - num
}
```
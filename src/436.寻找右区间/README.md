# 436.寻找右区间

> 难度：中等
>
> https://leetcode.cn/problems/find-right-interval/

## 题目

给你一个区间数组 intervals ，其中 intervals[i] = [starti, endi] ，且每个 starti 都 不同 。

区间 i 的 右侧区间 可以记作区间 j ，并满足 startj >= endi ，且 startj 最小化 。

返回一个由每个区间 i 的 右侧区间 的最小起始位置组成的数组。如果某个区间 i 不存在对应的 右侧区间 ，则下标 i 处的值设为 -1 。

### 示例
 
#### 示例 1：

```
输入：intervals = [[1,2]]
输出：[-1]
解释：集合中只有一个区间，所以输出-1。
```

#### 示例 2：

```
输入：intervals = [[3,4],[2,3],[1,2]]
输出：[-1,0,1]
解释：对于 [3,4] ，没有满足条件的“右侧”区间。
对于 [2,3] ，区间[3,4]具有最小的“右”起点;
对于 [1,2] ，区间[2,3]具有最小的“右”起点。
```

#### 示例 3：

```
输入：intervals = [[1,4],[2,3],[3,4]]
输出：[-1,2,-1]
解释：对于区间 [1,4] 和 [3,4] ，没有满足条件的“右侧”区间。
对于 [2,3] ，区间 [3,4] 有最小的“右”起点。
```

### 提示：

```
1 <= intervals.length <= 2 * 104
intervals[i].length == 2
-106 <= starti <= endi <= 106
每个间隔的起点都 不相同
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param undefined
 */
export function findRightInterval(intervals: number[][]): number[] {
  if (intervals.length === 1)
    return [-1]
  const res: number[] = new Array(intervals.length).fill(-1)
  intervals.forEach((interval, index) => {
    interval[2] = index
  })

  intervals.sort((a, b) => a[0] - b[0])

  for (let i = 0; i < intervals.length; i++) {
    // for (let j = i; j < intervals.length; j++) {
    //   if (intervals[j][0] >= intervals[i][1]) {
    //     res[intervals[i][2]] = intervals[j][2]
    //     break
    //   }
    // }

    let left = i
    let right = intervals.length - 1
    let target = -1
    while (left <= right) {
      const mid = (left + right) >> 1
      if (intervals[mid][0] >= intervals[i][1]) {
        target = intervals[mid][2]
        right = mid - 1
      }
      else {
        left = mid + 1
      }
    }
    res[intervals[i][2]] = target
  }
  return res
}
```

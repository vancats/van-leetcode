# 207.课程表

> 难度：中等
>
> https://leetcode-cn.com/problems/course-schedule/

## 题目

你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

### 示例

#### 示例 1：

```
输入：numCourses = 2, prerequisites = [[1,0]]
输出：true
解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
```

#### 示例 2：

```
输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
输出：false
解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
```

### 提示：

```
1 <= numCourses <= 105
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
prerequisites[i] 中的所有课程对 互不相同
```

## 题解

```typescript
/**
 * @description: 时间复杂度 O(N+M) 空间复杂度 O(N+M) N:课程数 M:先修课程要求数
 * @return {*}
 * @param {number} numCourses
 * @param {number} prerequisites
 */
export function canFinish(numCourses: number, prerequisites: number[][]): boolean {

  // 出度：修该课程后可修的课程
  let outArr: number[][] = new Array(numCourses).fill(0).map(() => [])
  // 入度：修该课程前需要修的课程数量
  let inArr = new Array(numCourses).fill(0)

  for (let i = 0; i < prerequisites.length; i++) {
    let [x, y] = prerequisites[i]
    // 入度增加
    inArr[x]++
    // 添加进出度
    outArr[y].push(x)
  }

  // 把入度为 0，即无先修课程的压入栈
  let stack: number[] = [], cnt = 0
  for (let i = 0; i < numCourses; i++) {
    if (!inArr[i]) stack.push(i)
  }

  while (stack.length) {
    // 弹出第一个
    let val: number = stack.shift()!
    // cnt 是已修课程数，弹出的皆为修过
    cnt++
    // 弹出的课程的所有出度课程，入度减一，如果为 0，则当前可修，入栈
    outArr[val].forEach(v => {
      inArr[v]--
      if (!inArr[v]) stack.push(v)
    })
  }

  // 修过的课程数等于总课程数
  return cnt === numCourses
}
```
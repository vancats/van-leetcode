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

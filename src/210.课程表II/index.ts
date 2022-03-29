/**
 * @description: 时间复杂度 O(N+M) 空间复杂度 O(N+M) N:课程数 M:先修课程要求数
 * @return {*}
 * @param {number} numCourses
 * @param {number} prerequisites
 */
export function findOrder(numCourses: number, prerequisites: number[][]): number[] {

  let outArr: number[][] = new Array(numCourses).fill(0).map(() => [])
  let inArr: number[] = new Array(numCourses).fill(0)
  let res: number[] = []

  for (let i = 0; i < prerequisites.length; i++) {
    let [x, y] = prerequisites[i]
    outArr[y].push(x)
    inArr[x]++
  }

  let stack: number[] = []
  for (let i = 0; i < numCourses; i++) {
    if (!inArr[i]) stack.push(i)
  }

  while (stack.length) {
    let val = stack.shift()!
    res.push(val)
    outArr[val].forEach(v => {
      inArr[v]--
      if (!inArr[v]) stack.push(v)
    })
  }
  return res.length === numCourses ? res : []
}

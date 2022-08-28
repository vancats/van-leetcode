/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N^2)
 * @return {*}
 * @param {number} k
 * @param {number} rowConditions
 * @param {number} colConditions
 */
export function buildMatrix(k: number, rowConditions: number[][], colConditions: number[][]): number[][] {
  function getSort(conditions: number[][]) {
    const outArr: number[][] = new Array(k + 1).fill(0).map(() => [])
    const inArr: number[] = new Array(k + 1).fill(0)
    for (let i = 0; i < conditions.length; i++) {
      const [x, y] = conditions[i]
      // 入度增加
      inArr[y]++
      // 添加进出度
      outArr[x].push(y)
    }
    // 把入度为 0 的直接压入
    const stack: number[] = []
    for (let i = 1; i <= k; i++)
      if (!inArr[i]) stack.push(i)

    const res: number[] = []
    while (stack.length) {
      const val = stack.shift()!
      // 弹出的都是无前置需求的，直接 push
      res.push(val)
      // 弹出的数字出度的数字数组，他们的所有入度减一，如果为 0 入栈
      outArr[val].forEach(v => {
        inArr[v]--
        if (!inArr[v]) stack.push(v)
      })
    }
    return res
  }
  // 得到行排序后的数组
  const row = getSort(rowConditions)
  // 得到列排序后的数组
  const col = getSort(colConditions)
  // 如果长度不为 k，那么代表有值不符合条件，直接返回
  if (row.length < k || col.length < k) return []
  const rect = new Array(k).fill(0).map(() => new Array(k).fill(0))
  const map = new Map()
  // 使用 map 降低时间复杂度
  for (let i = 0; i < k; i++)
    map.set(col[i], i)

  // 直接设置值就可以了
  for (let i = 0; i < k; i++) {
    const col = map.get(row[i])
    rect[i][col] = row[i]
  }
  return rect
}

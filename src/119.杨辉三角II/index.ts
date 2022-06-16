/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(1)
 * @return {*}
 * @param {number} rowIndex
 */
export function getRow(rowIndex: number): number[] {
  const res: number[][] = [[1]]
  for (let i = 1; i <= rowIndex; i++) {
    const arr: number[] = []
    for (let j = 0; j <= i; j++)
      arr[j] = (res[i - 1][j - 1] || 0) + (res[i - 1][j] || 0)
    res.push(arr)
  }
  return res[rowIndex]
}

export function getRow2(rowIndex: number): number[] {
  let prev: number[] = []
  let cur: number[] = []
  for (let i = 0; i <= rowIndex; i++) {
    cur = new Array(i + 1).fill(1)
    for (let j = 1; j < i; j++)
      cur[j] = prev[j - 1] + prev[j]

    prev = cur
  }
  return cur
}

export function getRow3(rowIndex: number): number[] {
  const cur: number[] = [1]
  for (let i = 1; i <= rowIndex; i++) {
    cur[i] = 1
    for (let j = i - 1; j > 0; j--)
      cur[j] += cur[j - 1]
  }
  return cur
}

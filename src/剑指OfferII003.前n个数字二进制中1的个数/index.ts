/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} n
 */
export function countBits(n: number): number[] {
  const arr = new Array(n + 1).fill(0)
  for (let i = 0; i <= n; i++)
    arr[i] = getCnt(i)

  return arr
}

function getCnt(num: number): number {
  let cnt = 0
  while (num > 0) {
    num &= (num - 1)
    cnt++
  }
  return cnt
}

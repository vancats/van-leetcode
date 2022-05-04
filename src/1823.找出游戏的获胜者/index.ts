/**
 * @description: 时间复杂度 O(KN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} n
 * @param {number} k
 */
export function findTheWinner(n: number, k: number): number {
  const arr: number[] = new Array(n).fill(0).map((item, index) => index + 1)
  let cnt = 1
  while (arr.length > 1) {
    const val = arr.shift()!
    if (cnt % k !== 0)
      arr.push(val)
    cnt++
  }
  return arr[0]
}

/**
 * @description: 时间复杂度 O(lgN) 空间复杂度 O(lgN)
 * @return {*}
 * @param {number} x
 * @param {number} n
 */
export function myPow(x: number, n: number): number {
  if (n === 0) return 1
  if (n === 1) return x
  if (n === -1) return 1 / x
  let num = myPow(x, Math.floor(n / 2))
  if (n % 2) {
    return x * num * num
  } else {
    return num * num
  }
}

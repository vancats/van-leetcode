/**
 * @description: 时间复杂度 O(lgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} n
 */
export function hasAlternatingBits(n: number): boolean {
  let prev = n % 2 ? 1 : 0
  n = n >> 1
  while (n) {
    const temp = n % 2 ? 1 : 0
    if (temp === prev)
      return false
    prev = temp
    n = n >> 1
  }
  return true
}

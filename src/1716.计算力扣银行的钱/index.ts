/**
 * @description: 时间复杂度 O(1) 空间复杂度 O(1)
 * @return {*}
 * @param {number} n
 */
export function totalMoney(n: number): number {
  let num = Math.floor(n / 7), rest = n % 7
  return 28 * num + 7 * num * (num - 1) / 2 + (1 + rest) * rest / 2 + num * rest
}
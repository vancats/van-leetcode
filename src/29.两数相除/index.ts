/**
 * @description: 时间复杂度 O(lgN) 空间复杂度 O(lgN)
 * @return {*}
 * @param {number} dividend
 * @param {number} divisor
 */
export function divide(dividend: number, divisor: number): number {
  const max = Math.pow(2, 31) - 1
  const min = -Math.pow(2, 31)
  let flag = true
  if (dividend < 0) {
    flag = !flag
    dividend = -dividend
  }
  if (divisor < 0) {
    flag = !flag
    divisor = -divisor
  }
  if (dividend < divisor) return 0

  const res: number[] = [divisor]
  let cnt = 1; let cur = divisor; let isMax = false
  while (cur < dividend) {
    while (res.length && res[res.length - 1] + cur > dividend) {
      res.pop()
      isMax = true
    }
    if (!res.length) break
    cur += res[res.length - 1]
    cnt += Math.pow(2, res.length - 1)
    if (!isMax) res.push(cur)
  }
  if (flag) return cnt > max ? max : cnt
  return -cnt < min ? min : -cnt
}

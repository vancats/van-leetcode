/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} n
 */
export function clumsy(n: number): number {
  let res = 0
  let flag = 1
  while (n > 0) {
    if (n >= 4) {
      res += (Math.floor((n * (n - 1) / (n - 2))) * flag + (n - 3))
      flag = -1
    }
    else {
      if (n === 1)
        return (res - 1) * -flag
      if (n === 2)
        return (res - 2) * -flag
      return (res - 6) * -flag
    }
    n -= 4
  }
  return res
}

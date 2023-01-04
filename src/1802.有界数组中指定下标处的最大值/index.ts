/**
 * @description: 时间复杂度 O(lg(maxSum)) 空间复杂度 O(1)
 * @return {*}
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 */
export function maxValue(n: number, index: number, maxSum: number): number {
  let left = 1
  let right = maxSum
  while (left < right) {
    const mid = (left + right + 1) >> 1
    if (isValid(mid))
      right = mid - 1
    else
      left = mid
  }

  return left

  function isValid(mid: number) {
    return mid + cal(mid, index) + cal(mid, n - index - 1) > maxSum
  }

  function cal(mid: number, length: number) {
    if (mid <= length)
      return (mid - 1) * mid / 2 + length - mid + 1

    else
      return (mid - 1 + mid - length) * length / 2
  }
}

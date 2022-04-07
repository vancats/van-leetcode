/**
 * @description: 时间复杂度 O(lgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} x
 */
export function mySqrt(x: number): number {
  let left = 0, right = x
  while (left < right) {
    let mid = (left + right) >> 1
    if (mid * mid <= x && (mid + 1) * (mid + 1) > x) return mid
    if (mid * mid > x) right = mid - 1
    else left = mid + 1
  }
  return left
}

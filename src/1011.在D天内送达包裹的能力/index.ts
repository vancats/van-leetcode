/**
 * @description: 时间复杂度 O(Nlg(Σw)) 空间复杂度 O(1)
 * @return {*}
 * @param {number} weights
 * @param {number} days
 */
export function shipWithinDays(weights: number[], days: number): number {
  // 左右边界
  let left = Math.max(...weights), right = weights.reduce((a, b) => a + b)

  while (left < right) {
    let mid = (left + right) >> 1
    // need 是需要的天数，cur 是现在的重量
    let need = 1, cur = 0
    for (const weight of weights) {
      // 如果现在的重量超过了 mid
      if ((cur + weight) > mid) {
        need++
        cur = 0
      }
      cur += weight
    }
    if (need <= days) right = mid
    else left = mid + 1
  }
  return left
}

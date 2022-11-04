/**
 * @description: 时间复杂度 O(根号N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} target
 */
export function reachNumber(target: number): number {
  target = Math.abs(target)
  let i = 1
  let sum = 0
  while (sum < target || (sum - target) % 2)
    sum += i++
  return i - 1
}

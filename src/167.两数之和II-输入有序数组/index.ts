/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} numbers
 * @param {number} target
 */
export function twoSum(numbers: number[], target: number): number[] {
  const map: Map<number, number> = new Map()
  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) return [map.get(target - numbers[i])!, i + 1]
    map.set(numbers[i], i + 1)
  }
  return []
}

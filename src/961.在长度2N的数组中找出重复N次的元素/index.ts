/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param undefined
 */
export function repeatedNTimes(nums: number[]): number {
  const set: Set<number> = new Set()
  for (const num of nums) {
    if (set.has(num))
      return num
    set.add(num)
  }
  return -1
}

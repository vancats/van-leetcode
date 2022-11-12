/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 */
export function minimumOperations(nums: number[]): number {
  const n = nums.length
  if (n < 2) return 0
  const map1: Map<number, number> = new Map()
  for (let i = 0; i < n; i += 2) {
    const cur = map1.get(nums[i]) || 0
    map1.set(nums[i], cur + 1)
  }
  const map2: Map<number, number> = new Map()
  for (let i = 1; i < n; i += 2) {
    const cur = map2.get(nums[i]) || 0
    map2.set(nums[i], cur + 1)
  }
  const arr1: number[][] = []
  for (const item of map1.entries())
    arr1.push(item)

  const arr2: number[][] = []
  for (const item of map2.entries())
    arr2.push(item)

  arr1.sort((a, b) => b[1] - a[1])
  arr2.sort((a, b) => b[1] - a[1])
  if (arr1[0][0] !== arr2[0][0])
    return n - arr1[0][1] - arr2[0][1]

  return n - Math.max(arr1[0][1] + ((arr2[1] && arr2[1][1]) || 0), ((arr1[1] && arr1[1][1]) || 0) + arr2[0][1])
}

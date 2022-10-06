/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 * @param {number} k
 */
export function subarraysDivByK(nums: number[], k: number): number {
  const map: Map<number, number> = new Map()
  map.set(0, 1)
  let preNum = 0
  let cnt = 0
  nums.forEach(num => {
    preNum += num
    const mod = (preNum % k + k) % k
    cnt += (map.get(mod) || 0)
    map.set(mod, (map.get(mod) || 0) + 1)
  })
  return cnt
}

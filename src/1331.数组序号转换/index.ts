/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} arr
 */
export function arrayRankTransform(arr: number[]): number[] {
  const nums: number[] = arr.slice().sort((a, b) => a - b)
  const map: Map<number, number> = new Map()
  let index = 1
  nums.forEach(num => (!map.has(num)) && (map.set(num, index++)))
  return arr.map(item => map.get(item)!)
}

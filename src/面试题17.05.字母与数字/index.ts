/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} array
 */
export function findLongestSubarray(array: string[]): string[] {
  const n = array.length
  const cntArr: number[] = new Array(n + 1).fill(0)
  array.forEach((item, index) => {
    cntArr[index + 1] = cntArr[index] + (isNaN(Number(item)) ? 1 : -1)
  })
  let left = 0
  let right = 0
  const map: Map<number, number> = new Map()
  for (let i = 0; i <= n; i++) {
    if (map.has(cntArr[i])) {
      const tempLeft = map.get(cntArr[i])!
      if (i - tempLeft > right - left) {
        left = tempLeft
        right = i
      }
    }
    else {
      map.set(cntArr[i], i)
    }
  }
  return array.slice(left, right)
}

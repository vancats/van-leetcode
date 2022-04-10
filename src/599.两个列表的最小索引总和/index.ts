/**
 * @Author: Lqf
 * @description: 空间复杂度 O(N) 时间复杂度 O(N)
 * @return {string[]}
 * @param {string[]} list1
 * @param {string[]} list2
 */
export function findRestaurant(list1: string[], list2: string[]): string[] {
  const map: Map<string, number> = new Map(); let result: string[] = []; let ind: number = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < list1.length; i++)
    map.set(list1[i], i)

  for (let i = 0; i < list2.length; i++) {
    if (map.has(list2[i])) {
      const num = i + (map.get(list2[i]) || 0)
      if (num < ind) {
        result = [list2[i]]
        ind = num
      }
      else if (num === ind) {
        result.push(list2[i])
      }
    }
  }
  return result
}

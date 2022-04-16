/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} paragraph
 * @param {string} banned
 */
export function mostCommonWord(paragraph: string, banned: string[]): string {
  const arr: string[] = paragraph.toLowerCase().replace(/[!\?',;\.]/g, ' ').split(' ')
  const map: Map<string, number> = new Map()
  let max = 0
  let res = ''
  arr.forEach(item => {
    if (!item || banned.includes(item)) return
    const num = (map.get(item) || 0) + 1
    map.set(item, num)
    if (num > max) {
      max = num
      res = item
    }
  })
  return res
}

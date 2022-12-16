/**
 * @description: 时间复杂度 O(NM) 空间复杂度 O(1)
 * @return {*}
 * @param {number} groups
 * @param {number} nums
 */
export function canChoose(groups: number[][], nums: number[]): boolean {
  let str = nums.join('&')
  for (let i = 0; i < groups.length; i++) {
    const cur = groups[i].join('&')
    const index = str.indexOf(cur)
    if (index < 0) return false
    if (index > 0 && str[index - 1] !== '&') return false
    str = str.slice(index + cur.length)
  }
  return true
}

/**
 * ! Sunday 算法 寻找当时后一位的对应位置
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} haystack
 * @param {string} needle
 */
export function strStr(haystack: string, needle: string): number {
  const map: Map<string, number> = new Map()
  for (let i = 0; i < needle.length; i++)
    map.set(needle[i], i)

  let i = 0
  while (i + needle.length <= haystack.length) {
    let flag = true
    for (let j = 0; needle[j]; j++) {
      if (needle[j] === haystack[i + j]) continue
      flag = false
      break
    }
    if (flag) return i
    i += (needle.length - (map.get(haystack[i + needle.length]) || 0))
  }
  return -1
}

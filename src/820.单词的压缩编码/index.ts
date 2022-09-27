/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(1)
 * @return {*}
 * @param {string} words
 */
export function minimumLengthEncoding(words: string[]): number {
  words = words.map(item => item.split('').reverse().join('')).sort()
  let res = 0
  for (let i = 0; i < words.length; i++) {
    if (i + 1 < words.length && words[i + 1].startsWith(words[i])) continue
    res += (words[i].length + 1)
  }
  return res
}

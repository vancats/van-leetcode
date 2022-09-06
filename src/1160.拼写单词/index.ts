/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N)
 * @return {*}
 * @param {string} words
 * @param {string} chars
 */
export function countCharacters(words: string[], chars: string): number {
  let res = 0
  const map: Map<string, number> = new Map()
  for (let i = 0; i < chars.length; i++)
    map.set(chars[i], (map.get(chars[i]) || 0) + 1)

  for (let i = 0; i < words.length; i++) {
    const map2: Map<string, number> = new Map()
    let flag = true
    for (let j = 0; j < words[i].length; j++) {
      const char = words[i][j]
      map2.set(char, (map2.get(char) || 0) + 1)
      if (!map.has(char) || map2.get(char)! > map.get(char)!)
        flag = false
    }
    if (flag)
      res += words[i].length
  }
  return res
}

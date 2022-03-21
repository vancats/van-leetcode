/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @param  {*}
 * @return {*}
 * @param {string} words
 */
export function longestWord(words: string[]): string {
  let map: Map<string, string> = new Map(), str: string = ''
  words.sort((a, b) => a.length - b.length)
  for (let i = 0; i < words.length; i++) {
    let prefix = words[i].slice(0, -1)
    if (map.has(prefix) || words[i].length === 1) {
      map.set(words[i], words[i])
      if (words[i].length > str.length) str = words[i]
      else if (words[i].length === str.length) str = words[i] < str ? words[i] : str
    }
  }
  return str
}
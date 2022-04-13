/**
 * @description: 时间复杂度 O(N^2 + M) 空间复杂度 O(N) - M 是所有字符的长度
 * @return {*}
 * @param {string} words
 */
export function maxProduct(words: string[]): number {
  const map: Map<string, number> = new Map()

  // 以二进制形式存储26个字母
  for (const word of words) {
    for (const char of word) {
      const ind = getBinary(char)
      map.set(word, (map.get(word) || 0) | (1 << ind))
    }
  }
  let max = 0
  for (let i = 0; i < words.length; i++) {
    const cur = map.get(words[i])!
    for (let j = i + 1; j < words.length; j++) {
      const next = map.get(words[j])!
      // 当 & 有值时即为有重复字母
      if (cur & next) continue
      max = Math.max(max, words[i].length * words[j].length)
    }
  }
  return max
}

function getBinary(char: string) {
  return char.charCodeAt(0) - 97
}

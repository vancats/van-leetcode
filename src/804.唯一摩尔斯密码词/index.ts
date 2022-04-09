/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(1)
 * @return {*}
 * @param {string} words
 */

const morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

export function uniqueMorseRepresentations(words: string[]): number {
  let set = new Set(), cnt: number = 0
  for (let i = 0; i < words.length; i++) {
    let s = ''
    for (let j = 0; j < words[i].length; j++) {
      s += morseCode[(words[i][j].charCodeAt(0) - 97)]
    }
    set.add(s)
  }
  return set.size
}

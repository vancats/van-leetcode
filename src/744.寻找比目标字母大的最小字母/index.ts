/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} letters
 * @param {string} target
 */
export function nextGreatestLetter(letters: string[], target: string): string {
  let res: string = letters[0]; let min: number = letters[0].charCodeAt(0) - target.charCodeAt(0)
  for (let i = 1; i < letters.length; i++) {
    const diff = letters[i].charCodeAt(0) - target.charCodeAt(0)
    if (min > 0) {
      if (diff <= 0)
        continue
      if (diff < min) {
        min = diff
        res = letters[i]
      }
    }
    else if (diff < min || diff > 0) {
      min = diff
      res = letters[i]
    }
  }
  return res
}

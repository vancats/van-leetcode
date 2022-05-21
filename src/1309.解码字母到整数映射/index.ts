/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} s
 */
export function freqAlphabets(s: string): string {
  let res = ''
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '#') {
      res = getLetter(s[i - 2] + s[i - 1]) + res
      i -= 2
    }
    else {
      res = getLetter(s[i]) + res
    }
  }
  return res
}

function getLetter(char: string) {
  return String.fromCharCode(96 + Number(char))
}

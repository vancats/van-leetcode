/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} widths
 * @param {string} s
 */
export function numberOfLines(widths: number[], s: string): number[] {
  let cnt = 1
  let ind = 0
  for (let i = 0; i < s.length; i++) {
    const cur = getNumber(widths, s[i])
    if (cur + ind > 100) {
      cnt++
      ind = cur
    }
    else {
      ind += cur
    }
  }
  return [cnt, ind]
}

function getNumber(widths: number[], char: string): number {
  return widths[char.charCodeAt(0) - 97]
}

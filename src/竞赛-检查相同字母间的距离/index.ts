/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} s
 * @param {number} distance
 */
export function checkDistances(s: string, distance: number[]): boolean {
  for (let i = 0; i < s.length; i++) {
    const code = getCharCode(s[i])
    if (distance[code] === -1) continue
    if (s[i + distance[code] + 1] !== s[i]) return false
    distance[code] = -1
  }
  return true
}

function getCharCode(char: string): number {
  return char.charCodeAt(0) - 97
}

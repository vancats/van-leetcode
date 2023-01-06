/**
 * @description: 时间复杂度 O(N) 空间复杂度(A) ASCII 值的范围
 * @return {*}
 * @param {string} s
 * @param {number} k
 */
export function characterReplacement(s: string, k: number): number {
  const freq: number[] = new Array(26).fill(0)
  let res = 0
  let left = 0
  let right = 0
  let maxCount = 0
  while (right < s.length) {
    const cur = getNum(s[right++])
    // 维护一个 max 值，因为 freq 保证正确，那么只需要维护当前值是否为最大即可；值只需要考虑增加，不需要考虑减少的情况
    maxCount = Math.max(maxCount, ++freq[cur])
    // 此时 k 不够，左边界右移，并且维护 freq
    if (right - left > maxCount + k)
      freq[getNum(s[left++])]--
    res = Math.max(res, right - left)
  }

  return res
}

function getNum(char: string) {
  return char.charCodeAt(0) - 65
}

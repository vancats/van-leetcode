/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} s
 */
export function maxScore(s: string): number {
  let cnt = Number(s[0] === '0') + Number(s[s.length - 1] === '1')
  let zero = 0
  let one = 0
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === '0') {
      if (++zero > one) {
        cnt += zero
        zero = one = 0
      }
    }
    else {
      one++
    }
  }
  return cnt + one
}

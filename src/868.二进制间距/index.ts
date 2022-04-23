/**
 * @description: 时间复杂度 O(lgN) 空间复杂度 O(1)
 * @return {*}
 * @param {number} n
 */
export function binaryGap(n: number): number {
  const binary = n.toString(2)
  let max = 0
  let flag = binary.indexOf('1')
  if (flag < 0)
    return 0
  for (let i = flag + 1; i < binary.length; i++) {
    if (binary[i] === '1') {
      max = Math.max(i - flag, max)
      flag = i
    }
  }
  return max
}

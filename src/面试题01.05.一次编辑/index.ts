/**
 * @description: 时间复杂度 O(M + N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} first
 * @param {string} second
 */
export function oneEditAway(first: string, second: string): boolean {
  if (first === second)
    return true
  if (Math.abs(first.length - second.length) > 1)
    return false
  let flag = false
  if (first.length <= second.length)
    [first, second] = [second, first]
  let sign = false
  if (first.length > second.length)
    flag = true
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      if (sign)
        return false
      sign = true
      if (flag)
        first = first.slice(0, i) + first.slice(i-- + 1)
      else
        continue
    }
  }
  return true
}

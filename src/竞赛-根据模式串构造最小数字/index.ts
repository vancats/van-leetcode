/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} pattern
 */
export function smallestNumber(pattern: string): string {
  const arr = [1]
  let cur = 2
  let curD = 0
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === 'I') {
      arr.push(cur++)
      curD = 0
    }
    else {
      curD++
      arr.splice(i - curD + 1, 0, cur++)
    }
  }
  return arr.join('')
}

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} s
 */
export function reverseString(s: string[]): string[] {
  let left = 0; let right = s.length - 1
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
  return s
}

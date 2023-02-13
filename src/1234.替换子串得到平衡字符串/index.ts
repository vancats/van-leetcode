/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function balancedString(s: string): number {
  const n = s.length
  const obj = { Q: 0, W: 0, E: 0, R: 0 }
  for (const char of s) obj[char]++

  let res = n
  let left = 0
  let right = 0
  // 会先找到 right 的位置以满足条件，然后 left 行动来进行缩减
  for (; right < n; right++) {
    obj[s[right]]--
    while (isOk()) {
      res = Math.min(res, right - left + 1)
      obj[s[left++]]++
    }
  }
  return res
  function isOk() {
    return Object.keys(obj).every(item => obj[item] <= n / 4)
  }
}

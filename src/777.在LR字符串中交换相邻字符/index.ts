/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} start
 * @param {string} end
 */
export function canTransform(start: string, end: string): boolean {
  const n = start.length
  // 双指针
  let i = 0
  let j = 0
  while (i < n && j < n) {
    // 找到第一个不为 X 的值
    while (start[i] === 'X') i++
    while (end[j] === 'X') j++
    if (i < n && j < n) {
      // 如果两值不等，直接 false
      if (start[i] !== end[j]) return false
      // 如果是 L，但是 i 值小于 j，那么无法移动到相应位置，R 同理
      if ((start[i] === 'L' && i < j) || (start[i] === 'R' && i > j)) return false
      i++
      j++
    }
  }
  // 如果 j 已经到末尾，查看 i 后的元素是否都为 X
  if (i < n)
    if (start.slice(i) !== 'X'.repeat(n - i)) return false

  if (j < n)
    if (end.slice(j) !== 'X'.repeat(n - j)) return false

  return true
}

/**
 * @description: 待定
 * @return {*}
 * @param {string} s
 * @param {number} k
 */
export function longestSubstring(s: string, k: number): number {
  // 收集每个字符出现的次数
  const map: Map<string, number> = new Map()
  for (let i = 0; i < s.length; i++)
    map.set(s[i], (map.get(s[i]) || 0) + 1)

  // 扫描整个字符串，收集每个不符合条件字符的下标
  const lackArr: number[] = []
  for (let i = 0; i < s.length; i++)
    if (map.get(s[i])! < k) lackArr.push(i)

  // 代码标记，增加结尾点
  lackArr.push(s.length)
  if (lackArr.length === 1) return s.length

  let max = 0
  let prev = 0
  lackArr.forEach(item => {
    // 准备检查的字符串的长度
    const len = item - prev
    // 如果长度小于 k，没有必要递归
    if (len >= k)
      // 递归处理子串
      max = Math.max(max, longestSubstring(s.slice(prev, prev + len), k))

    // 要走到下一个位置
    prev = item + 1
  })
  return max
}

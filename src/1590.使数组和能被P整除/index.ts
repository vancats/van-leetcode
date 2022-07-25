/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 * @param {number} p
 */
export function minSubarray(nums: number[], p: number): number {
  const n = nums.length
  let res = Infinity
  const max = nums.reduce((c, v) => (c + v) % p, 0)
  if (!max) return 0

  // 处理前缀树
  const prefix: number[] = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++)
    prefix[i + 1] = prefix[i] + nums[i]

  // 用哈希来计数
  const map: Map<number, number> = new Map()
  for (let i = 0; i <= n; i++) {
    // 获取当前值与max差的哈希对应值
    const index = map.get((prefix[i] - max) % p)
    // 如果存在，则代表前面有这个值，更新值
    if (index !== undefined)
      res = Math.min(res, i - index)

    // 将该值的下标更新到哈希表中
    map.set(prefix[i] % p, i)
  }

  // 减去整个数据也返回 -1
  return [Infinity, n].includes(res) ? -1 : res
}

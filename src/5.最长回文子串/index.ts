/**
 * ! 马拉车算法
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function longestPalindrome(s: string): string {
  const ns = getNewString(s) /// 获取有 # 的新字符串
  const d: number[] = new Array(ns.length).fill(0) /// 存放每个值的最大距离

  let l = 0 /// 能覆盖到最远位置的左侧
  let r = -1 /// 能覆盖到最远位置的右侧
  for (let i = 0; ns[i]; i++) {
    /// 如果该值没有被覆盖到
    if (i > r)
      d[i] = 1

    /// 如果被覆盖到了，那么取 该值对称点的 d 值与该值到边界值的小值
    else
      d[i] = Math.min(r - i, d[l + r - i])

    /// 朴素的回文算法，继续查看两边是否回文
    while (i - d[i] >= 0 && ns[i - d[i]] === ns[i + d[i]]) d[i]++

    /// 更新 l 和 r 值
    if (i - d[i] > 0 && i + d[i] > r) {
      l = i - d[i]
      r = i + d[i]
    }
  }

  let str = ''
  let tmp = -1
  for (let i = 0; ns[i]; i++) {
    if (tmp >= d[i]) continue
    tmp = d[i]
    str = ''
    for (let j = i - d[i] + 1; j < i + d[i]; j++) {
      if (ns[j] === '#') continue
      str += ns[j]
    }
  }
  return str
}

function getNewString(s: string): string {
  let ns = '#'
  for (let i = 0; s[i]; i++) {
    ns += s[i]
    ns += '#'
  }
  return ns
}

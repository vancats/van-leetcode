/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function beautySum(s: string): number {
  let res = 0
  for (let i = 0; i < s.length; i++)
    dfs(i, new Array(26).fill(0))

  return res

  function dfs(index: number, arr: number[]) {
    if (index >= s.length) return
    const pos = s[index].charCodeAt(0) - 97
    arr[pos]++
    let min = Infinity
    let max = -Infinity
    for (let i = 0; i < 26; i++) {
      if (!arr[i]) continue
      min = Math.min(min, arr[i])
      max = Math.max(max, arr[i])
    }
    res += (max - min)
    dfs(index + 1, arr)
  }
}

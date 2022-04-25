/**
 * @description: 时间复杂度 待定 空间复杂度 O(H)
 * @return {*}
 * @param {string} s
 */
export function restoreIpAddresses(s: string): string[] {
  const n = s.length
  if (n < 4 || n > 12) return []
  const res: string[] = []
  dfs(s, 0, 3)
  return res

  function dfs(s: string, ind: number, cnt: number) {
    if (cnt === 0) {
      if (ind >= s.length || Number(s.slice(ind)) > 255)
        return
      if (s.length - ind > 1 && s[ind] === '0')
        return

      return res.push(s)
    }

    for (let i = 1; i < 4; i++) {
      if (Number(s.slice(ind, ind + i)) > 255) continue
      const str = `${s.slice(0, ind + i)}.${s.slice(ind + i)}`
      dfs(str, ind + i + 1, cnt - 1)
      if (s[ind] === '0') break
    }
  }
}

/**
 * @description: 时间复杂度 O(N^3) 空间复杂度 O(N^3)
 * @return {*}
 * @param {string} _s
 */
export function ambiguousCoordinates(_s: string): string[] {
  function search(s: string, start: number, end: number): string[] {
    const ans = new Array<string>()
    if (start === end || s[start] !== '0') ans.push(s.slice(start, end + 1))
    for (let i = start; i < end; i++) {
      const a = s.slice(start, i + 1)
      const b = s.slice(i + 1, end + 1)
      if (a.length > 1 && a[0] === '0') continue
      if (b[b.length - 1] === '0') continue
      ans.push(`${a}.${b}`)
    }
    return ans
  }
  const s = _s.slice(1, _s.length - 1)
  const n = s.length
  const ans = new Array<string>()
  for (let i = 0; i < n - 1; i++) {
    const a = search(s, 0, i)
    const b = search(s, i + 1, n - 1)
    for (const x of a) {
      for (const y of b)
        ans.push(`(${x}, ${y})`)
    }
  }
  return ans
}

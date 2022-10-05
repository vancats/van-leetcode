/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} cpdomains
 */
export function subdomainVisits(cpdomains: string[]): string[] {
  const map: Map<string, number> = new Map()
  cpdomains.forEach(item => {
    const cnt = Number(item.split(' ')[0])
    let str = item.split(' ')[1]
    while (str) {
      map.set(str, (map.get(str) || 0) + cnt)
      const index = str.indexOf('.')
      str = str.slice(index + 1)
      if (index === -1) str = ''
    }
  })
  const res: string[] = []
  for (const [key, value] of map.entries())
    res.push(`${value} ${key}`)

  return res
}

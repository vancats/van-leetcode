/**
 * @description: Annotation
 * @return {*}
 * @param {string} strs
 */
export function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map()
  for (const str of strs) {
    const arr: string = Array.from(str).sort().join('')
    const temp: string[] = map.get(arr) || []
    temp.push(str)
    map.set(arr, temp)
  }
  return Array.from(map.values())
}

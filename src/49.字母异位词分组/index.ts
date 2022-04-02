/**
 * @description: Annotation
 * @return {*}
 * @param {string} strs
 */
export function groupAnagrams(strs: string[]): string[][] {
  let map: Map<string, string[]> = new Map()
  for (const str of strs) {
    let arr: string = Array.from(str).sort().join('')
    let temp: string[] = map.get(arr) || []
    temp.push(str)
    map.set(arr, temp)
  }
  return Array.from(map.values())
}
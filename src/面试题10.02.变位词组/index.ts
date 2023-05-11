/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} strs
 */
export function groupAnagrams(strs: string[]): string[][] {
    const map: Map<string, string[]> = new Map()
    strs.forEach(item => {
        const str = item.split('').sort().join('')
        map.set(str, [...(map.get(str) || []), item])
    })
    const res: string[][] = []
    for (const arr of map.values()) {
        res.push(arr)
    }
    return res
}

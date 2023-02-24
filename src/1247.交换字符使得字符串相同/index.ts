/**
 * @description: 时间复杂度 O(N) 空间复杂度 O
 * @return {*}
 * @param {string} s1
 * @param {string} s2
 */
export function minimumSwap(s1: string, s2: string): number {
    let x = 0
    let y = 0
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s2[i]) continue
        if (s1[i] === 'x') x++
        if (s1[i] === 'y') y++
    }
    if ((x + y) % 2) return -1
    return Math.ceil(x / 2) + Math.ceil(y / 2)
}

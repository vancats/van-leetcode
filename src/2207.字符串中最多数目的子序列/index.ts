/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} text
 * @param {string} pattern
 */
export function maximumSubsequenceCount(text: string, pattern: string): number {
    const [start, end] = pattern
    let startCount = 0
    let endCount = 0
    for (let i = 0; i < text.length; i++) {
        if (text[i] === start) startCount++
        if (text[i] === end) endCount++
    }
    if (start === end) {
        return startCount * (startCount + 1) / 2
    }
    let res = Math.max(startCount, endCount)
    for (let i = 0; i < text.length; i++) {
        if (text[i] === end) endCount--
        if (text[i] === start) res += endCount
    }
    return res
}

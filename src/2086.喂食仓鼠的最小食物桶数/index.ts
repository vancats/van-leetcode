/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} hamsters
 */
export function minimumBuckets(hamsters: string): number {
    let res = 0
    const arr = hamsters.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'O' || arr[i] === '.') continue
        const left = arr[i - 1] || 'H'
        const right = arr[i + 1] || 'H'
        if (left === 'H' && right === 'H') return -1
        if (left === 'O' || right === 'O') continue
        if (right === 'H') arr[i - 1] = 'O'
        else arr[i + 1] = 'O'
        res++
    }
    return res
}

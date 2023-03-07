import { Heap } from '../../utils/Heap'

/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {number} intervals
 */

export function minGroups(intervals: number[][]): number {
    intervals.sort((a: number[], b: number[]) => a[0] - b[0])
    const heap = new Heap<number>((a: number, b: number) => a < b)

    intervals.forEach(([s, e]) => {
        if (heap.size && heap.top! < s) heap.pop()
        heap.push(e)
    })
    return heap.size
}

import { Heap } from '../../utils/Heap'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N^2)
 * @return {*}
 * @param {number} barcodes
 */
export function rearrangeBarcodes(barcodes: number[]): number[] {
  const cntArr: number[][] = []
  barcodes.forEach(num => {
    const ind = cntArr.findIndex(item => item[0] === num)
    if (ind > -1)
      cntArr[ind][1]++
    else
      cntArr.push([num, 1])
  })
  const heap = new Heap((a, b) => b[1] < a[1])
  cntArr.forEach(item => heap.push(item))
  const res: number[] = []
  while (heap.top) {
    let tempVal
    if (heap.top[0] === res[res.length - 1])
      tempVal = heap.pop()

    const [val, cnt] = heap.pop()
    res.push(val)
    if (cnt > 1)
      heap.push([val, cnt - 1])

    if (tempVal)
      heap.push(tempVal)
  }
  return res
}

import { quickSort, mergeSort, countSort, insertSort, selectSort, bubbleSort } from '../../utils/SortMode'

describe('912.排序数组', () => {
  describe('快速排序', () => {
    testCase(quickSort)
  })

  describe('归并排序', () => {
    testCase(mergeSort)
  })

  describe('计数排序', () => {
    testCase(countSort)
  })

  describe('插入排序', () => {
    testCase(insertSort)
  })

  describe('选择排序', () => {
    testCase(selectSort)
  })

  describe('冒泡排序', () => {
    testCase(bubbleSort)
  })
})

function testCase(fn: (nums: number[]) => number[]) {
  it('示例一', () => {
    const nums = [5, 2, 3, 1]
    const expected = fn(nums)
    expect(expected).toStrictEqual([1, 2, 3, 5])
  })

  it('示例二', () => {
    const nums = [5, 1, 1, 2, 0, 0]
    const expected = fn(nums)
    expect(expected).toStrictEqual([0, 0, 1, 1, 2, 5])
  })

  it('示例三', () => {
    const nums = [-2, 3, -5]
    const expected = fn(nums)
    expect(expected).toStrictEqual([-5, -2, 3])
  })

  it('示例四', () => {
    const nums = [-4, 0, 7, 4, 9, -5, -1, 0, -7, -1]
    const expected = fn(nums)
    expect(expected).toStrictEqual([-7, -5, -4, -1, -1, 0, 0, 4, 7, 9])
  })
}
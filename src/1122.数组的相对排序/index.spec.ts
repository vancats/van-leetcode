import { relativeSortArray } from './index'

describe('1122.数组的相对排序', () => {
  it('示例一', () => {
    const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19]
    const arr2 = [2, 1, 4, 3, 9, 6]
    expect(relativeSortArray(arr1, arr2)).toStrictEqual([2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19])
  })

  it('示例二', () => {
    const arr1 = [28, 6, 22, 8, 44, 17]
    const arr2 = [22, 28, 8, 6]
    expect(relativeSortArray(arr1, arr2)).toStrictEqual([22, 28, 8, 6, 17, 44])
  })
})

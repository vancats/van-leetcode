import { duplicateZeros } from '.'

describe('1089.复写零', () => {
  it('示例一', () => {
    const arr = [1, 0, 2, 3, 0, 4, 5, 0]
    duplicateZeros(arr)
    expect(arr).toStrictEqual([1, 0, 0, 2, 3, 0, 0, 4])
  })

  it('示例二', () => {
    const arr = [1, 2, 3]
    duplicateZeros(arr)
    expect(arr).toStrictEqual(arr)
  })
})

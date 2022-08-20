import { rearrangeBarcodes } from '.'

describe('1054.距离相等的条形码', () => {
  it('示例一', () => {
    expect(rearrangeBarcodes([1, 1, 1, 2, 2, 2])).toStrictEqual(
      [1, 2, 1, 2, 1, 2])
  })

  it('示例二', () => {
    expect(rearrangeBarcodes([1, 1, 1, 1, 2, 2, 3, 3])).toStrictEqual([1, 3, 1, 2, 1, 3, 2, 1])
  })
})

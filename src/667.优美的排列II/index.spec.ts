import { constructArray } from '.'

describe('667.优美的排列II', () => {
  it('示例一', () => {
    expect(constructArray(3, 1)).toStrictEqual([1, 2, 3])
  })

  it('示例二', () => {
    expect(constructArray(3, 2)).toStrictEqual([1, 3, 2])
  })
})

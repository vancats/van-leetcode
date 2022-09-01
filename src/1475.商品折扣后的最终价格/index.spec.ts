import { finalPrices } from '.'

describe('1475.商品折扣后的最终价格', () => {
  it('示例一', () => {
    expect(finalPrices([8, 4, 6, 2, 3])).toStrictEqual([4, 2, 4, 2, 3])
  })

  it('示例二', () => {
    expect(finalPrices([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
  })

  it('示例三', () => {
    expect(finalPrices([10, 1, 1, 6])).toStrictEqual([9, 0, 1, 6])
  })
})

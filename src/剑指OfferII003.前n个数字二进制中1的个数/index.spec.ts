import { countBits } from '.'

describe('剑指OfferII003.前n个数字二进制中1的个数', () => {
  it('示例一', () => {
    expect(countBits(2)).toStrictEqual([0, 1, 1])
  })

  it('示例二', () => {
    expect(countBits(5)).toStrictEqual([0, 1, 1, 2, 1, 2])
  })
})

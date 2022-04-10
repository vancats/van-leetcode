import { countPrimeSetBits } from '.'

describe('762.二进制表示中质数个计算置位', () => {
  it('示例一', () => {
    expect(countPrimeSetBits(6, 10)).toBe(4)
  })

  it('示例二', () => {
    expect(countPrimeSetBits(10, 15)).toBe(5)
  })
})

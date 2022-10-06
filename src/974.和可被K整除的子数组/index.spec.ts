import { subarraysDivByK } from '.'

describe('974.和可被K整除的子数组', () => {
  it('示例一', () => {
    expect(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)).toBe(7)
  })

  it('示例二', () => {
    expect(subarraysDivByK([5], 9)).toBe(0)
  })
})

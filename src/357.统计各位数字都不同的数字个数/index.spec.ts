import { countNumbersWithUniqueDigits } from '.'

describe('357.统计各位数字都不同的数字个数', () => {
  it('示例一', () => {
    expect(countNumbersWithUniqueDigits(2)).toBe(91)
  })

  it('示例二', () => {
    expect(countNumbersWithUniqueDigits(0)).toBe(1)
  })
})

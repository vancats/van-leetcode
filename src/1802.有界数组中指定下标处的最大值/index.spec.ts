import { maxValue } from '.'

describe('1802.有界数组中指定下标处的最大值', () => {
  it('示例一', () => {
    expect(maxValue(4, 2, 6)).toBe(2)
  })

  it('示例二', () => {
    expect(maxValue(6, 1, 10)).toBe(3)
  })

  it('示例三', () => {
    expect(maxValue(1, 0, 24)).toBe(24)
  })

  it('示例四', () => {
    expect(maxValue(4, 0, 4)).toBe(1)
  })
})

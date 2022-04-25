import { canMeasureWater } from '.'

describe('365.水壶问题', () => {
  it('示例一', () => {
    expect(canMeasureWater(3, 5, 4)).toBe(true)
  })

  it('示例二', () => {
    expect(canMeasureWater(2, 6, 5)).toBe(false)
  })

  it('示例三', () => {
    expect(canMeasureWater(1, 2, 3)).toBe(true)
  })
})

import { shipWithinDays } from '.'

describe('1011.在D天内送达包裹的能力', () => {
  it('示例一', () => {
    expect(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(15)
  })

  it('示例二', () => {
    expect(shipWithinDays([3, 2, 2, 4, 1, 4], 3)).toBe(6)
  })

  it('示例三', () => {
    expect(shipWithinDays([1, 2, 3, 1, 1], 4)).toBe(3)
  })
})

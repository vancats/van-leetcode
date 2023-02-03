import { getMaximumConsecutive } from './index'
describe('1798.你能构造出连续值的最大数目', () => {
  it('示例一', () => {
    expect(getMaximumConsecutive([1, 1, 1, 4])).toBe(8)
  })

  it('示例二', () => {
    expect(getMaximumConsecutive([1, 3])).toBe(2)
  })

  it('示例三', () => {
    expect(getMaximumConsecutive([1, 4, 10, 3, 1])).toBe(20)
  })
})

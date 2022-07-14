import { containsNearbyAlmostDuplicate } from '.'

describe('220.存在重复元素III', () => {
  it('示例一', () => {
    expect(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)).toBe(true)
  })

  it('示例二', () => {
    expect(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2)).toBe(true)
  })

  it('示例三', () => {
    expect(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3)).toBe(false)
  })
})

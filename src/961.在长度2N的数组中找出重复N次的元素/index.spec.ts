import { repeatedNTimes } from '.'

describe('961.在长度2N的数组中找出重复N次的元素', () => {
  it('示例一', () => {
    expect(repeatedNTimes([1, 2, 3, 3])).toBe(3)
  })

  it('示例二', () => {
    expect(repeatedNTimes([2, 1, 2, 5, 3, 2])).toBe(2)
  })

  it('示例三', () => {
    expect(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])).toBe(5)
  })
})

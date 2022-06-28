import { largestNumber } from '.'

describe('179.最大数', () => {
  it('示例一', () => {
    expect(largestNumber([10, 2])).toBe('210')
  })

  it('示例二', () => {
    expect(largestNumber([3, 30, 34, 5, 9])).toBe('9534330')
  })
})

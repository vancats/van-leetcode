import { longestNiceSubarray } from '.'
describe('竞赛-最长优雅子数组', () => {
  it('示例一', () => {
    expect(longestNiceSubarray([1, 3, 8, 48, 10])).toBe(3)
  })

  it('示例二', () => {
    expect(longestNiceSubarray([3, 1, 5, 11, 13])).toBe(1)
  })
})

import { findLongestSubarray } from '.'

describe('面试题17.05.字母与数字', () => {
  it('示例一', () => {
    expect(findLongestSubarray(['A', '1', 'B', 'C', 'D', '2', '3', '4', 'E', '5', 'F', 'G', '6', '7', 'H', 'I', 'J', 'K', 'L', 'M'])).toStrictEqual(['A', '1', 'B', 'C', 'D', '2', '3', '4', 'E', '5', 'F', 'G', '6', '7'])
  })
  it('示例二', () => {
    expect(findLongestSubarray(['A', 'A'])).toStrictEqual([])
  })
})

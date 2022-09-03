import { findLongestChain } from '.'

describe('646.最长数对链', () => {
  it('示例一', () => {
    expect(findLongestChain([[1, 2], [2, 3], [3, 4]])).toBe(2)
  })

  it('示例二', () => {
    expect(findLongestChain([[1, 2], [7, 8], [4, 5]])).toBe(3)
  })
})

import { findSubsequences } from "."

describe('491.递增子序列', () => {
  it('示例一', () => {
    expect(findSubsequences([4, 6, 7, 7])).toStrictEqual([[4, 6], [4, 6, 7], [4, 6, 7, 7], [4, 7], [4, 7, 7], [6, 7], [6, 7, 7], [7, 7]])
  })

  it('示例二', () => {
    expect(findSubsequences([4, 4, 3, 2, 1])).toStrictEqual([[4, 4]])
  })
})
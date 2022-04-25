import { permuteUnique } from '.'

describe('47.全排列II', () => {
  it('示例一', () => {
    expect(permuteUnique([1, 1, 2])).toStrictEqual([[1, 1, 2], [1, 2, 1], [2, 1, 1]])
  })

  it('示例二', () => {
    expect(permuteUnique([1, 2, 3])).toStrictEqual([[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]])
  })
})

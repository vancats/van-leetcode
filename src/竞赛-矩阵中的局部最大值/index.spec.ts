import { largestLocal } from '.'

describe('竞赛-矩阵中的局部最大值', () => {
  it('示例一', () => {
    expect(largestLocal([[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]])).toStrictEqual([[9, 9], [8, 6]])
  })

  it('示例二', () => {
    expect(largestLocal([[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 2, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]])).toStrictEqual([[2, 2, 2], [2, 2, 2], [2, 2, 2]])
  })
})

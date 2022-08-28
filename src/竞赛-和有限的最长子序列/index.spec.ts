import { answerQueries } from '.'

describe('竞赛-和有限的最长子序列', () => {
  it('示例一', () => {
    expect(answerQueries([4, 5, 2, 1], [3, 10, 21])).toStrictEqual([2, 3, 4])
  })

  it('示例二', () => {
    expect(answerQueries([2, 3, 4, 5], [1])).toStrictEqual([0])
  })
})

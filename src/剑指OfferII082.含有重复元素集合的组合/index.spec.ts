import { combinationSum2 } from '.'

describe('剑指OfferII082.含有重复元素集合的组合', () => {
  it('示例一', () => {
    expect(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)).toStrictEqual([
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6],
    ])
  })

  it('示例二', () => {
    expect(combinationSum2([2, 5, 2, 1, 2], 5)).toStrictEqual([
      [1, 2, 2],
      [5],
    ])
  })
})

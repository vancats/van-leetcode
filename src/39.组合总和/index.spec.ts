import { combinationSum } from '.'

describe('39.组合总和', () => {
  it('示例一', () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toStrictEqual([[7], [2, 2, 3]])
  })

  it('示例二', () => {
    expect(combinationSum([2, 3, 5], 8)).toStrictEqual([[3, 5], [2, 3, 3], [2, 2, 2, 2]])
  })

  it('示例三', () => {
    expect(combinationSum([2], 1)).toStrictEqual([])
  })
})

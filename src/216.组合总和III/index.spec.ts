import { combinationSum3 } from '.'

describe('216.组合总和III', () => {
  it('示例一', () => {
    expect(combinationSum3(3, 9)).toStrictEqual([[2, 3, 4], [1, 3, 5], [1, 2, 6]])
  })

  it('示例二', () => {
    expect(combinationSum3(3, 7)).toStrictEqual([[1, 2, 4]])
  })
})

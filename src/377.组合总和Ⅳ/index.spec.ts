import { combinationSum4 } from '.'

describe('377.组合总和Ⅳ', () => {
  it('示例一', () => {
    expect(combinationSum4([1, 2, 3], 4)).toBe(7)
  })

  it('示例二', () => {
    expect(combinationSum4([9], 3)).toBe(0)
  })
})

import { isIdealPermutation } from '.'

describe('775.全局倒置与局部倒置', () => {
  it('示例一', () => {
    expect(isIdealPermutation([1, 0, 2])).toBe(true)
  })

  it('示例二', () => {
    expect(isIdealPermutation([1, 2, 0])).toBe(false)
  })
})

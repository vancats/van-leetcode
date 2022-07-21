import { divide } from '.'

describe('29.两数相除', () => {
  it('示例一', () => {
    expect(divide(10, 3)).toBe(3)
  })

  it('示例二', () => {
    expect(divide(7, -3)).toBe(-2)
  })
})

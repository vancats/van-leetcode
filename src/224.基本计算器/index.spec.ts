import { calculate } from '.'

describe('224.基本计算器', () => {
  it('示例一', () => {
    expect(calculate('1 + 1')).toBe(2)
  })

  it('示例二', () => {
    expect(calculate(' 2-1 + 2 ')).toBe(3)
  })
})

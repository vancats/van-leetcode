import { countTriples } from '.'

describe('1925.统计平方和三元组的数目', () => {
  it('示例一', () => {
    expect(countTriples(5)).toBe(2)
  })

  it('示例二', () => {
    expect(countTriples(10)).toBe(4)
  })
})

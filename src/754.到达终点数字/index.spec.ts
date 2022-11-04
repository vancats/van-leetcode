import { reachNumber } from '.'

describe('754.到达终点数字', () => {
  it('示例一', () => {
    expect(reachNumber(2)).toBe(3)
  })

  it('示例二', () => {
    expect(reachNumber(3)).toBe(2)
  })

  it('示例三', () => {
    expect(reachNumber(4)).toBe(3)
  })
})

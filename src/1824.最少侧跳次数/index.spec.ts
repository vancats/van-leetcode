import { minSideJumps } from '.'

describe('1824.最少侧跳次数', () => {
  it('示例一', () => {
    expect(minSideJumps([0, 1, 2, 3, 0])).toBe(2)
  })

  it('示例二', () => {
    expect(minSideJumps([0, 1, 1, 3, 3, 0])).toBe(0)
  })

  it('示例三', () => {
    expect(minSideJumps([0, 2, 1, 0, 3, 0])).toBe(2)
  })
})

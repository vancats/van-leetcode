import { minimumTotal } from '.'

describe('120.三角形最小路径和', () => {
  it('示例一', () => {
    expect(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).toBe(11)
  })

  it('示例二', () => {
    expect(minimumTotal([[-10]])).toBe(-10)
  })
})

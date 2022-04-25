import { minimumSize } from '.'

describe('1760.袋子里最少数目的球', () => {
  it('示例一', () => {
    expect(minimumSize([2, 4, 8, 2], 4)).toBe(2)
  })

  it('示例二', () => {
    expect(minimumSize([9], 2)).toBe(3)
  })

  it('示例三', () => {
    expect(minimumSize([7, 17], 2)).toBe(7)
  })
})

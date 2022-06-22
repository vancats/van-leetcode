import { findMaxForm } from '.'

describe('474.一和零', () => {
  it('示例一', () => {
    expect(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3)).toBe(4)
  })

  it('示例二', () => {
    expect(findMaxForm(['10', '0', '1'], 1, 1)).toBe(2)
  })
})

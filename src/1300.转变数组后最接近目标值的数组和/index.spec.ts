import { findBestValue } from '.'

describe('1300.转变数组后最接近目标值的数组和', () => {
  it('示例一', () => {
    expect(findBestValue([4, 9, 3], 10)).toBe(3)
  })

  it('示例二', () => {
    expect(findBestValue([2, 3, 5], 10)).toBe(5)
  })

  it('示例三', () => {
    expect(findBestValue([60864, 25176, 27249, 21296, 20204], 56803)).toBe(11361)
  })
})

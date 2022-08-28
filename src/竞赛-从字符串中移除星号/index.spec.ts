import { removeStars } from '.'

describe('竞赛-从字符串中移除星号', () => {
  it('示例一', () => {
    expect(removeStars('leet**cod*e')).toBe('lecoe')
  })

  it('示例二', () => {
    expect(removeStars('erase*****')).toBe('')
  })
})

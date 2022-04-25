import { multiply } from '.'

describe('43.字符串相乘', () => {
  it('示例一', () => {
    expect(multiply('2', '3')).toBe('6')
  })

  it('示例二', () => {
    expect(multiply('123', '456')).toBe('56088')
  })
})

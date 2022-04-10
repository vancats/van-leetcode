import { rotateString } from '.'

describe('796.旋转字符串', () => {
  it('示例一', () => {
    expect(rotateString('abcde', 'cdeab')).toBe(true)
  })

  it('示例二', () => {
    expect(rotateString('abcde', 'abced')).toBe(false)
  })
})

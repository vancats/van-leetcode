import { strStr } from '.'

describe('28.实现strStr()', () => {
  it('示例一', () => {
    expect(strStr('hello', 'll')).toBe(2)
  })

  it('示例二', () => {
    expect(strStr('aaaaa', 'bba')).toBe(-1)
  })
})

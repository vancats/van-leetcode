import { complexNumberMultiply } from './index'

describe('537.复数乘法', () => {
  it('示例一', () => {
    expect(complexNumberMultiply('1+1i', '1+1i')).toBe('0+2i')
  })

  it('示例二', () => {
    expect(complexNumberMultiply('1+-1i', '1+-1i')).toBe('0+-2i')
  })
})
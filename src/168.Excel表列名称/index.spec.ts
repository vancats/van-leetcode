import { convertToTitle } from '.'

describe('168.Excel表列名称', () => {
  it('示例一', () => {
    expect(convertToTitle(1)).toBe('A')
  })

  it('示例二', () => {
    expect(convertToTitle(28)).toBe('AB')
  })

  it('示例三', () => {
    expect(convertToTitle(701)).toBe('ZY')
  })

  it('示例四', () => {
    expect(convertToTitle(2147483647)).toBe('FXSHRXW')
  })
})

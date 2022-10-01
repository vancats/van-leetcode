import { reformatNumber } from '.'

describe('1694.重新格式化电话号码', () => {
  it('示例一', () => {
    expect(reformatNumber('1-23-45 6')).toBe('123-456')
  })

  it('示例二', () => {
    expect(reformatNumber('123 4-567')).toBe('123-45-67')
  })

  it('示例三', () => {
    expect(reformatNumber('123 4-5678')).toBe('123-456-78')
  })

  it('示例四', () => {
    expect(reformatNumber('12')).toBe('12')
  })

  it('示例五', () => {
    expect(reformatNumber('--17-5 229 35-39475 ')).toBe('175-229-353-94-75')
  })
})

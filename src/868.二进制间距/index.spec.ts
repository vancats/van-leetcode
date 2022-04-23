import { binaryGap } from '.'

describe('868.二进制间距', () => {
  it('示例一', () => {
    expect(binaryGap(22)).toBe(2)
  })

  it('示例二', () => {
    expect(binaryGap(8)).toBe(0)
  })

  it('示例三', () => {
    expect(binaryGap(5)).toBe(2)
  })
})
